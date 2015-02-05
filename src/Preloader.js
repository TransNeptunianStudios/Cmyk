Cmyk.Preloader = function(game){
	// define width and height of the game
	Cmyk.GAME_WIDTH = 500;
	Cmyk.GAME_HEIGHT = 500;
};
Cmyk.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((Cmyk.GAME_WIDTH-311)/2, 
										  (Cmyk.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('background', 'assets/background.png');
		this.load.image('title', 'assets/title.png');
		this.load.image('board', 'assets/board.png');

		// load spritesheets
		this.load.spritesheet('button-start', 'assets/button-start.png', 200, 100);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
