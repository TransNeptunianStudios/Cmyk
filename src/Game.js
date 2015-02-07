Cmyk.Game = function(game){
	// define needed variables for Cmyk.Game
	this.boardGroup = null;
	this.moveTween = null;

	// Checking what keys have been released
	this.keyReleased = new Array();

	this.moves = 0;
	this.movesText = null;

};
Cmyk.Game.prototype = {
	create: function(){
		// start the physics engine
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 300;	
    	var tmp = 250 + Math.cos(3 * Math.PI / 4 ) * 250;
    	this.physics.arcade.setBounds(tmp
    								, tmp
    								, 500 - tmp*2
    								, 500 - tmp*2);

		// display background
		this.add.sprite(0, 0, 'background');

		// weird Group magic
		this.boardGroup = this.add.group(0, 0, 'BoardGroup');
		this.boardGroup.enableBody = true;
		this.boardGroup.x = 250; 
		this.boardGroup.y = 250; 

		var board = this.boardGroup.create(0, 0, 'board');
		board.anchor.setTo(0.5);
		board.body.allowGravity = false;

		// Test Block!
		var testBlock = this.boardGroup.create(0, 0, 'block');
		testBlock.anchor.setTo(0.5)
    	testBlock.body.collideWorldBounds = true;
    	testBlock.body.bounce.y = 0.2;	

		// set font style
		this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
		
		// initialize the moves text with 0
		this.movesText = this.add.text(15, 15, "0", this._fontStyle);

		// initialize keyboard
    	cursors = this.input.keyboard.createCursorKeys();
		this.keyReleased[cursors.left] = true;
		this.keyReleased[cursors.right] = true;
		this.keyReleased[cursors.down] = true;
		this.keyReleased[cursors.up] = true;
	},
	update: function(){
 
 		// Get keys 		
		if (this.moveAllowed(cursors.left))
			this.rotateCCW();
		else if (this.moveAllowed(cursors.right))
			this.rotateCW();
		else if (this.moveAllowed(cursors.down) || this.moveAllowed(cursors.up))
			this.flip();
		
	},
	moveAllowed: function(key){
		 if(!this.keyReleased[key] && key.isUp)
			this.keyReleased[key] = true;	
				
		if (this.keyReleased[key] && key.isDown 
			&& (!this.moveTween || !this.moveTween.isRunning))
		{		 
			this.keyReleased[key] = false;
			this.moves += 1;
			this.movesText.setText(this.moves);		
			return true;
		}
		return false;
	},
	rotateCW: function(){
		this.moveTween = this.add.tween(this.boardGroup)
		.to({angle: this.boardGroup.angle+90}, 750, Phaser.Easing.Linear.None, true);
	},
	rotateCCW: function(){
		this.moveTween = this.add.tween(this.boardGroup)
		.to({angle: this.boardGroup.angle-90}, 750, Phaser.Easing.Linear.None, true);

	},
	flip: function(){
		var axisMod = Math.abs(this.boardGroup.angle) == 90 ? -1 : 1;
		this.moveTween = this.add.tween(this.boardGroup.scale).to (
										{ x: this.boardGroup.scale.x * axisMod ,
										  y: this.boardGroup.scale.y * -axisMod }
										, 750, Phaser.Easing.Linear.None, true);							
	}
};
