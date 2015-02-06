Cmyk.Game = function(game){
	// define needed variables for Cmyk.Game
	this._board = null;
	this._boardTween = null;

	// Checking what keys have been released
	this._keyReleased = new Array();

	this._moves = 0;
	this._movesText = null;

};
Cmyk.Game.prototype = {
	create: function(){
		// start the physics engine
		this.physics.startSystem(Phaser.Physics.ARCADE);

		// set the global gravity
		this.physics.arcade.gravity.y = 200;

		// display images background
		this.add.sprite(0, 0, 'background');
		this._board = this.add.sprite(250, 250, 'board')
		this._board.anchor.setTo(0.5);

		// set font style
		this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
		
		// initialize the moves text with 0
		this._movesText = this.add.text(20, 20, "0", this._fontStyle);

		// initialize keyboard
    	cursors = this.input.keyboard.createCursorKeys();
		this._keyReleased[cursors.left] = true;
		this._keyReleased[cursors.right] = true;
		this._keyReleased[cursors.down] = true;
		this._keyReleased[cursors.up] = true;
	},
	update: function(){
 
 		// Get keys
 		// there myst be a nicer way!? look into TweenManager.istweening
		if (this.moveAllowed(cursors.left))
			this.rotateCCW();
		else if (this.moveAllowed(cursors.right))
			this.rotateCW();
		else if (this.moveAllowed(cursors.down) || this.moveAllowed(cursors.up))
			this.flip();
		
	},
	moveAllowed: function(key){
		 if(!this._keyReleased[key] && key.isUp)
			this._keyReleased[key] = true;	
				
		if (this._keyReleased[key] && key.isDown 
			&& (!this._boardTween || !this._boardTween.isRunning))
		{		 
			this._keyReleased[key] = false;		
			return true;
		}
		return false;
	},
	rotateCW: function(){
		this._boardTween = this.add.tween(this._board)
		.to({angle:'+90'}, 750, Phaser.Easing.Bounce.Out, true, 100);
		this._moves += 1;
		this._movesText.setText(this._moves);
	},
	rotateCCW: function(){
		this._boardTween = this.add.tween(this._board)
		.to({angle:'-90'}, 750, Phaser.Easing.Bounce.Out, true, 100);
		this._moves += 1;
		this._movesText.setText(this._moves);
	},
	flip: function(){
		this._boardTween = this.add.tween(this._board.scale).to (
										{ y: this._board.scale.y * -1 }
										, 750, Phaser.Easing.Bounce.Out
										, true);
		this._moves += 1;
		this._movesText.setText(this._moves);
	}
};
