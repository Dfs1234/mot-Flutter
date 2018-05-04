(function(){
	var canvas;
	var context;
	var background;

	canvas = document.getElementById('game');
	context = canvas.getContext('2d');

	context.fillStyle = "blue";
	context.fillRect(0, 0, canvas.width, canvas.height);
	background = new Image();
	background.src='img/space2.png';
	background.onload = function(){
		context.drawImage(background, 0, 0, canvas.width, canvas.height);
	}
})();