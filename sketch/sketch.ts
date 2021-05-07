var cols: number, rows: number;
var w: number = 20;
var grid: Cell[] = [];
var current: Cell;
function setup() {
	console.log("🚀 - Setup initialized - P5 is running");
	createCanvas(500, 500);
  frameRate(15)
	cols = floor(width / w);
	rows = floor(height / w);
	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			var cell: Cell = new Cell(i, j);
			grid.push(cell);
		}
	}
  current=grid[0]
}

function draw() {
	background(51);
	grid.forEach((cell) => {
		cell.show();
	});
  current.selfHighLight()
  //Step 1
  let next = current.checkNeighbours()
  if (next){
    next.visited=true

    //Step 3
    removeWall(current,next)

    current=next
  }
}
