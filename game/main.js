window.onload = main;
var cursor,
cursorCntx,
cursorX,
cursorY,
clickX,
clickY;

var cursorImg = new Image();
cursorImg.src = "./textures/cursor2.png"

function main(){
	cursor = document.getElementById('player');
	cursor.width = 800;
	cursor.height = 600;
	cursorCntx = cursor.getContext('2d');
	unitCanvas();
	game();
	document.addEventListener("keydown", chekOnKey, false);
	document.addEventListener("keyup", chekOffKey, false);
	document.addEventListener("mousemove", cursore, false);
	document.addEventListener("click", clickPosition, false);
}
// функия захвата позиции курсора
function cursore(e){
	cursorX = e.pageX - cursor.offsetLeft;
	cursorY = e.pageY - cursor.offsetTop;
	document.getElementById('cursorposition').innerHTML = "Cursor position X: "+cursorX+" Y: "+cursorY;
}
// функия захвата позиции клика
function clickPosition(e){
	clickX = e.pageX - cursor.offsetLeft;
	clickY = e.pageY - cursor.offsetTop;
	document.getElementById('clickX').value = clickX;
	document.getElementById('clickY').value = clickY;
}
// функия отрисовки пользовательского курсора
function cursorDraw(){
	cursorCntx.drawImage(cursorImg, 0, 0, 28, 32,
		cursorX, cursorY, 28, 32);	
}
// игровой цикл
function game() {
	console.log("Game");
	player.draw();
	player.walking();
	cursorDraw();
	playerAnimate();
	requestAnimationFrame(game);
}

