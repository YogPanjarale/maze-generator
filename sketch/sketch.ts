var cols: number, rows: number;
var w: number = 50;
var grid: Cell[] = [];
var current: Cell;
function setup() {
	console.log("🚀 - Setup initialized - P5 is running");
	createCanvas(500, 500);
  frameRate(5)
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
  let next = current.checkNeighbours()
  if (next){
    next.visited=true
    current=next
  }
}
