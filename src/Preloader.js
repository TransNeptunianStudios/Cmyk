Cmyk.Preloader = function(game){
	// define width and height of the game
	Cmyk.WIDTH = 500;
	Cmyk.HEIGHT = 500;
};
Cmyk.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#ABCDEF';
		this.preloadBar = this.add.sprite((Cmyk.WIDTH-311)/2, 
										  (Cmyk.HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images

	},
	create: function(){
		// start the MainMenu state
		this.state.start('Game');
	}
};
