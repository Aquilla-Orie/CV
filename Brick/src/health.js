class Health
{
	constructor(game, position)
	{

		this.image =  document.getElementById('img_health');

		this.game = game;

		this.position = position;
		this.width = 50;
		this.height = 24;

		this.hit = false;
	}

	update()
	{
		if (detectCollision(this.game.ball, this)) 
		{
			this.game.ball.speed.y = -this.game.ball.speed.y;

			this.hit = true;

			this.game.lives++;
		}
	}

	draw(ctx)
	{
		ctx.drawImage(
			this.image,
			this.position.x, 
			this.position.y,
			this.width,
			this.height);
	}
}