class InputHandler
{
	constructor(paddle, game)
	{
		document.addEventListener('keydown', (event) => 
		{
			switch(event.keyCode)
			{
				case 37:
					//move left
					paddle.moveLeft();
					break;
				
				case 39:
					//move right
					paddle.moveRight();
					break;

				case 27:
					//toggle pause
					game.togglePause();
					break;

				case 32:
					//start game
					game.start();
					break;
			}
		});


		document.addEventListener('keyup', (event) => 
		{
			switch(event.keyCode)
			{
				case 37:
					if (paddle.speed < 0)
						paddle.stop();
					break;
				
				case 39:
					if (paddle.speed > 0)
						paddle.stop();
					break;
			}
		});
	}
}