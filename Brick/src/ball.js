class Ball
{
	constructor(game)
	{
		this.image =  document.getElementById('img_ball');

		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;

		this.game = game;

		this.resetBallPosition(this.game);

		this.speed = {x: 4, y: 2 };
		this.size = 13;
	}

	resetBallPosition(game)
	{
		this.position = {x: game.paddle.position.x + game.paddle.width/2,
		 y: game.paddle.position.y - game.paddle.height};
	}

	draw(ctx)
	{
		ctx.drawImage(
			this.image,
			this.position.x, 
			this.position.y,
			this.size,
			this.size);
	}

	update(dt)
	{
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;

		if (this.position.x + this.size > this.gameWidth || this.position.x < 0)
		{
			this.speed.x = -this.speed.x;
		}

		if (this.position.y < 0)
		{
			this.speed.y = -this.speed.y;
		}

		if (this.position.y + this.size > this.gameHeight)
		{
			this.game.lives--;
			this.resetBallPosition(this.game);
		}

		if (detectCollision(this, this.game.paddle))
		{
			this.speed.y = -this.speed.y;
			this.position.y = this.game.paddle.position.y - this.size;
		}
	}
}