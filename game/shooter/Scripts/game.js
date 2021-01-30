var Game = function(width, height, canvasId){
	var canvasWidth = width;
	var canvasHeight = height;
	var canvas = $("#"+canvasId)[0].getContext('2d');

	return {
		drawBorders: function(){
			canvas.strokeRect(0, 0, canvasWidth, canvasHeight);
		},

		drawImage: function(image, x, y){
			canvas.drawImage(image, x, y);
		},

		clearCanvas: function(){
			canvas.clearRect(0, 0, canvasWidth, canvasHeight);
		}
	};
}

