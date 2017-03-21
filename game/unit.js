var gameMapCanvas;
var gameMapCntx;
var game_mapImg = new Image();
game_mapImg.src = "./textures/game_map.png";
function unitCanvas(){
	gameMapCanvas = document.getElementById('game_map');
	gameMapCanvas.width = 800;
	gameMapCanvas.height = 600;
	gameMapCntx = gameMapCanvas.getContext('2d');
	drawMap(800,600);
	unitPlayer();
}
function drawMap(x,y){
	gameMapCntx.drawImage(game_mapImg, x, y, 800, 600,
		0, 0, 800, 600);
}
// функциия захвата нажатой клавиши
function chekOnKey(e) {
	var keyID = e.keyCode || temp.which;
	var keyChar = String.fromCharCode(keyID);
	document.getElementById('codecl').innerHTML = "Код клавиши: "+keyID+" - "+keyChar;
	if (keyID == 38) {
		player.isUP = true;
		e.preventDefault();
	}
	if (keyID == 40) {
		player.isDOWN = true;
		e.preventDefault();
	}
	if (keyID == 37) {
		player.isLEFT = true;
		e.preventDefault();
	}
	if (keyID == 39) {
		player.isRIGTH = true;
		e.preventDefault();
	}
	document.getElementById('wasd').innerHTML = "UP: "+player.isUP+" DOWN: "+player.isDOWN+" LEFT: "+player.isLEFT+" RIGTH: "+player.isRIGTH;
}
// функциия захвата опущенной клавиши
function chekOffKey(e) {
	var keyID = e.keyCode || temp.which; //код клавиши
	var keyChar = String.fromCharCode(keyID); //строковое значение
	if (keyID == 38) {
		player.isUP = false;
		e.preventDefault();
	}
	if (keyID == 40) {
		player.isDOWN = false;
		e.preventDefault();
	}
	if (keyID == 37) {
		player.isLEFT = false;
		e.preventDefault();
	}
	if (keyID == 39) {
		player.isRIGTH = false;
		e.preventDefault();
	}
	document.getElementById('wasd').innerHTML = "UP: "+player.isUP+" DOWN: "+player.isDOWN+" LEFT: "+player.isLEFT+" RIGTH: "+player.isRIGTH;
}