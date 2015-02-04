Cmyk.Game = function(game){
	// define needed variables for Cmyk.Game
    var moves = 0;

	// define Cmyk variables to reuse them in Cmyk.item functions

};
Cmyk.Game.prototype = {
	create: function(){
		// start the physics engine
		this.physics.startSystem(Phaser.Physics.ARCADE);

		// set the global gravity
		this.physics.arcade.gravity.y = 200;

		// display images background
		this.add.sprite(0, 0, 'background');

		// set font style
		this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
		
		// initialize the moves text with 0
		Cmyk._scoreText = this.add.text(20, 20, "0", this._fontStyle);
	},
	update: function(){

	}
};
