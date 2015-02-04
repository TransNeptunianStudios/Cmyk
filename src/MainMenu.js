Cmyk.MainMenu = function(game){};
Cmyk.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		this.add.sprite((Cmyk.GAME_WIDTH-400)/2, 60, 'title');
		// add the button that will start the game
		this.add.button(Cmyk.GAME_WIDTH-220, Cmyk.GAME_HEIGHT-120, 'button-start', this.startGame, this, 1, 0, 2);
	},
	startGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};