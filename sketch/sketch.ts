var cols: number, rows: number;
var w: number = 50;
var grid: Cell[] = [];
var current: Cell;
function setup() {
	console.log("🚀 - Setup initialized - P5 is running");
	createCanvas(500, 500);
	cols = floor(width / w);
	rows = floor(height / w);
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			var cell: Cell = new Cell(i, j);
			grid.push(cell);
		}
	}
}

function draw() {
	background(51);
	grid.forEach((cell) => {
		cell.show();
	});
}
