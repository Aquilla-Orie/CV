const GAMESTATE = 
{
	PAUSED: 0,
	RUNNING: 1,
	MENU: 2,
	GAMEOVER: 3,
	NEWLEVEL: 4
};

class Game
{
	constructor(gameWidth, gameHeight, bricksPerRow)
	{
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;

		this.gamestate = GAMESTATE.MENU;
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);

		this.gameObjects = [];
		this.bricks = [];

		this.lives = 3;

		this.levels = [level1, level2 , level3];
		this.currentLevel = 1;

		this.displayLevel = 1;

		new InputHandler(this.paddle, this);
	}

	start()
	{
		if (this.gamestate != GAMESTATE.MENU &&
		 this.gamestate != GAMESTATE.NEWLEVEL) 
		{
			return;
		}
		this.ball.resetBallPosition(this);

		this.bricks = buildLevel(this, this.levels[this.currentLevel]);

		this.gameObjects = [this.ball, this.paddle];

		this.gamestate = GAMESTATE.RUNNING;
	}
	
	update(deltatime)
	{
		if (this.lives === 0) 
		{
			this.gamestate = GAMESTATE.GAMEOVER;
		}

		if (this.gamestate === GAMESTATE.PAUSED ||
		 this.gamestate === GAMESTATE.MENU ||
		 this.gamestate === GAMESTATE.GAMEOVER
		) 
		{return;}

		if (this.bricks.length === 0) 
		{
			this.currentLevel++;
			this.displayLevel++;
			this.gamestate = GAMESTATE.NEWLEVEL;
			this.start();
		}

		[...this.gameObjects, ...this.bricks].forEach(object => object.update(deltatime));

		this.bricks = this.bricks.filter(brick => !brick.hit);
	}

	draw(ctx)
	{
		[...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));

		ctx.font = "15px Arial";
		ctx.fillStyle = "red";
		ctx.textAlign = "right";
		ctx.fillText("Level " + this.currentLevel, this.gameWidth, this.gameHeight - (this.gameHeight - 20));
		ctx.fillText("Lives: " + this.lives, this.gameWidth - (this.gameWidth - 60), this.gameHeight - 10);


		if (this.gamestate === GAMESTATE.PAUSED) 
		{
			ctx.rect(0,0,this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,0.5)";
			ctx.fill();

			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
		}

		if (this.gamestate === GAMESTATE.MENU) 
		{
			ctx.rect(0,0,this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,1)";
			ctx.fill();

			ctx.font = "bold 50px Georgia";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("BRICKS", this.gameWidth / 2, this.gameHeight / 4);

			ctx.font = "28px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Press SPACEBAR To Start", this.gameWidth / 2, this.gameHeight / 2);
		}

		if (this.gamestate === GAMESTATE.GAMEOVER) 
		{
			ctx.rect(0,0,this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,1)";
			ctx.fill();

			ctx.font = "50px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("GAMEOVER", this.gameWidth / 2, this.gameHeight / 2);
		}
	}

	togglePause()
	{
		if (this.gamestate == GAMESTATE.PAUSED) 
		{
			this.gamestate = GAMESTATE.RUNNING;
		}
		else
		{
			this.gamestate = GAMESTATE.PAUSED;
		}
	}
}