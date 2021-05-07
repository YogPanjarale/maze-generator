var cols: number, rows: number;
var w: number = 50/2;

var grid: Cell[] = [];
var stack:Cell[] = [];

var current: Cell;

let loopGenerate=false
function setup() {
	console.log("🚀 - Setup initialized - P5 is running");
	createCanvas(500, 500);
  frameRate(50)
	generateGrid()
  makeUi()
}

function draw() {
	background(51);
  generateMaze()
	grid.forEach((cell) => {
		cell.show();
	});
}
