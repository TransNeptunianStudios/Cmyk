Cmyk.Game = function(game){
	// define needed variables for Cmyk.Game
	this._board = null;
	this._boardTween = null;

	this._leftBeenReleased = true;
	this.rightBeenReleased = true;

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
	},
	update: function(){
 
 		// Get keys
		if (this._leftBeenReleased && cursors.left.isDown 
			&& (!this._boardTween || !this._boardTween.isRunning)) // there myst be a nicer way!? look into TweenManager.istweening
		{
			this.rotateCW();
			this._leftBeenReleased = false;
		}
		else if (this.rightBeenReleased && cursors.right.isDown 
			&& (!this._boardTween || !this._boardTween.isRunning)) 
		{
			this.rotateCCW();
			this.rightBeenReleased = false;
		}
		else if(!this._leftBeenReleased && cursors.left.isUp){
			this._leftBeenReleased = true;
		}
		else if(!this.rightBeenReleased && cursors.right.isUp){
			this.rightBeenReleased = true;
		}
	},
	rotateCW: function(){
		this._boardTween = this.add.tween(this._board)
		.to({angle:'+90'}, 750, Phaser.Easing.Linear.None, true, 100);
		this._moves += 1;
		this._movesText.setText(this._moves);
	},
	rotateCCW: function(){
		this._boardTween = this.add.tween(this._board)
		.to({angle:'-90'}, 750, Phaser.Easing.Linear.None, true, 100);
		this._moves += 1;
		this._movesText.setText(this._moves);
	}
};
