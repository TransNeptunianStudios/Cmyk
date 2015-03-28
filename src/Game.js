Cmyk.Game = function(game){

};
Cmyk.Game.prototype = {
	create: function(){
		var initialGrid = math.zeros(10, 10); 
		initialGrid.subset(math.index(0, 0), 1); // Best way to add?!
		initialGrid.subset(math.index(9, 9), 1); // Best way to add?!
		initialGrid.subset(math.index(2, 5), 1); // Best way to add?!
		
		var boardDisplay = new BoardDisplay(this.game, initialGrid);
	}
};
