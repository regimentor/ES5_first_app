var playerCanvas;
var playerCntx;
var playerStats;
var playerStatsCntx;
var playerImg = new Image();
playerImg.src = "./textures/player.png";
function unitPlayer() {
	playerCanvas = document.getElementById('player');
	playerCanvas.width = 800;
	playerCanvas.height = 600;
	playerCntx = playerCanvas.getContext('2d');
	playerStats = document.getElementById('player-stats');
	playerStats.width = 800;
	playerStats.height = 25;
	playerStatsCntx = playerStats.getContext('2d');
	playerStatsCntx.fillStyle = "#ffffff";
	playerStatsCntx.font = "bold 12pt Arial";
	playerStatistic();
}
// функция вывода статистики игрока
var playerStatistic = function(){
	console.log("stats");
	playerStatsCntx.clearRect(0,0,800,25);
	playerStatsCntx.fillText(
		"| Level:"+player.level+" | HP:"+player.HP+" | MP:"+player.MP+" | EXP:"+player.XP+"/"+player.XPtoNextLvl+" | "
		,10,20);		
}
// объект игрока
var player = {
	img: playerImg,
	x: 0,
	y: 0,
	positionX: 350,
	positionY: 250,
	width: 33,
	height: 47,
	isUP: false,
	isDOWN: false,
	isLEFT: false,
	isRIGTH: false,
	speed: 3,
	level:  1,
	XP: 0,
	XPtoNextLvl: 100,
	HP: 100,
	MP: 100,
	draw: function () {
		playerCntx.clearRect(0, 0, 800, 600);
		playerCntx.drawImage(this.img, this.x, this.y, this.width, this.height,
			this.positionX, this.positionY, this.width, this.height);
	},
	walking: function () {
		if (this.isUP) this.positionY -= this.speed;
		if (this.isDOWN) this.positionY += this.speed;
		if (this.isLEFT) this.positionX -= this.speed;
		if (this.isRIGTH) this.positionX += this.speed;
	}
}
//анимация игрока
var animateGo = false;
var playerAnimate = function () {
	if (player.isDOWN) {
		if (!animateGo) {
			animateGo = true;
			var cadr = 0;
			var animate = setInterval(function () {
				player.x = player.width * cadr;
				player.y = player.height * 0;
				player.draw();
				cadr++;
				if (cadr >= 3) cadr = 0;
				if (!player.isDOWN) {
					clearInterval(animate);
					player.x = player.width * 0;
					player.y = player.height * 0;
					animateGo = false;
				}
			}, 60);
		}
	}
	if (player.isUP) {
		if (!animateGo) {
			animateGo = true;
			var cadr = 0;
			var animate = setInterval(function () {
				player.x = player.width * cadr;
				player.y = player.height * 3;
				player.draw();
				cadr++;
				if (cadr >= 3) cadr = 0;
				if (!player.isUP) {
					clearInterval(animate);
					player.x = player.width * 0;
					player.y = player.height * 3;
					animateGo = false;
				}
			}, 60);
		}
	}
	if (player.isLEFT) {
		if (!animateGo) {
			animateGo = true;
			var cadr = 0;
			var animate = setInterval(function () {
				player.x = player.width * cadr;
				player.y = player.height * 1;
				player.draw();
				cadr++;
				if (cadr >= 3) cadr = 0;
				if (!player.isLEFT) {
					clearInterval(animate);
					player.x = player.width * 0;
					player.y = player.height * 1
					animateGo = false;
				}
			}, 60);
		}
	}
	if (player.isRIGTH) {
		if (!animateGo) {
			animateGo = true;
			var cadr = 0;
			var animate = setInterval(function () {
				player.x = player.width * cadr;
				player.y = player.height * 2;
				player.draw();
				cadr++;
				if (cadr >= 3) cadr = 0;
				if (!player.isRIGTH) {
					clearInterval(animate);
					player.x = player.width * 0;
					player.y = player.height * 2;
					animateGo = false;
				}
			}, 60);
		}
	}
}

