BoardDisplay = function (game, boardGrid) {
	this.margin = 100;
	this.width = Cmyk.WIDTH - (this.margin*2);
	this.height = Cmyk.HEIGHT - (this.margin*2);
	this.blockWidth = this.width / boardGrid.size()[0];
	this.blockHeigt = this.height / boardGrid.size()[1];
	
	// Draw board
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0xFF3300);	
    graphics.drawRect(this.margin, this.margin, this.width, this.height);
	
	// Draw blocks
	boardGrid.forEach(function (value, index, matrix) {
		if(value){
			graphics.beginFill(0x123456);	
			graphics.drawRect(this.margin + index[0] * this.blockWidth, 
							  this.margin + index[1] * this.blockHeigt, 
							  this.blockWidth, 
							  this.blockHeigt);
		}
	}.bind(this));

}