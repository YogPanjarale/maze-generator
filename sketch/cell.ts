type Walls = {
	top: boolean;
	left: boolean;
	bottom: boolean;
	right: boolean;
};

function index(i: number, j: number) {
	if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
		return -1;
	}
	return i + j * cols;
}
class Cell {
	i: number;
	j: number;
	wallsB: boolean[] = [];
	walls: Walls = { top: true, bottom: true, left: true, right: true };
	visited: boolean = false;
	inStack: boolean = false;
	constructor(i: number, j: number) {
		this.i = i;
		this.j = j;
	}
	show() {
		var x = this.i * w;
		var y = this.j * w;
		push();
		stroke(255);
		strokeWeight(5);
		const _ = 0;
		const { top, left, bottom, right } = this.walls;
		if (top) line(x + _, y + _, x + w, y + _); //top
		if (left) line(x + w, y + _, x + w, y + w); //left
		if (bottom) line(x + w, y + w, x + _, y + w); //bottom
		if (right) line(x + _, y + w, x + _, y + _); //right
		if (!(this.inStack || this.visited)){
			var x = this.i * w;
			var y = this.j * w;
			noStroke()
			fill(255,255,255)
			rect(x, y, w, w);

		}
		pop();
		noFill()
		// rect(x,y,w,w)
	}
	highLight(alpha: number = 255) {
		push();
		var x = this.i * w;
		var y = this.j * w;
		noStroke();
		fill(255, 120, 30, alpha);
		rect(x, y, w, w);
		pop();
	}
	highLightStack(){
		push();
		var x = this.i * w;
		var y = this.j * w;
		noStroke();
		fill(255, 120, 100,100);
		rect(x, y, w, w);
		pop();

	}
	selfHighLight(alpha: number = 255) {
		push();
		var x = this.i * w;
		var y = this.j * w;
		noStroke();
		fill(255, 100, 0, alpha);
		rect(x, y, w, w);
		pop();
	}
	checkNeighbours() {
		let { i, j } = this;
		let all: Cell[] = [];
		let neighbours: Cell[] = [];
		let top = grid[index(i, j - 1)];
		let right = grid[index(i + 1, j)];
		let bottom = grid[index(i, j + 1)];
		let left = grid[index(i - 1, j)];
		all = [top, right, bottom, left];
		all.forEach((c) => {
			if (c && !c.visited) {
				neighbours.push(c);
			}
		});
		neighbours.forEach((n) => n.highLight(50));
		if (neighbours.length > 0) {
			let r = floor(random(0, neighbours.length));
			return neighbours[r];
		} else {
			return undefined;
		}
	}
}
function removeWall(a: Cell, b: Cell) {
	var x: number = a.i - b.i;
	var y: number = a.j - b.j;
	switch (x) {
		case 1: //right,left
			a.walls.right = false;
			b.walls.left = false;
			break;
		case -1: //left,right
			a.walls.left = false;
			b.walls.right = false;
			break;
	}
	switch (y) {
		case 1: //top,bottom
			a.walls.top = false;
			b.walls.bottom = false;
			break;
		case -1: //bottom,top
			a.walls.bottom = false;
			b.walls.top = false;
			break;
	}
}
