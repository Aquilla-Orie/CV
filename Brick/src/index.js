
let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const bricksPerRow = 12;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, bricksPerRow);

let lastTime = 0;


function gameLoop(timestamp)
{
	let deltatime = timestamp - lastTime;

	lastTime = timestamp
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

	game.update(deltatime);
	game.draw(ctx);

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
