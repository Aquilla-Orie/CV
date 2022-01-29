function buildLevel(game, level)
{
	let bricks = [];
	level.forEach((row, rowIndex) =>{
		row.forEach((brick, brickIndex) =>{
			if (brick === 1) 
			{
				let position = 
				{
					x: 50 * brickIndex,
					y: 20 + 24 * rowIndex
				};
				bricks.push(new Brick(game, position));
			}

			if (brick === 2) 
			{
				let position = 
				{
					x: 50 * brickIndex,
					y: 20 + 24 * rowIndex
				};
				bricks.push(new Health(game, position));
			}
		});
	});
	return bricks;
}



const level1 = [
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const level2 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
];

const level3 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];