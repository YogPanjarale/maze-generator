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
	constructor(i: number, j: number) {
		this.i = i;
		this.j = j;
	}
	show() {
		var x = this.i * w;
		var y = this.j * w;
		stroke(255);
		const _ = 0;
		const { top, left, bottom, right } = this.walls;
		if (top) line(x + _, y + _, x + w, y + _); //top
		if (left) line(x + w, y + _, x + w, y + w); //left
		if (bottom) line(x + w, y + w, x + _, y + w); //bottom
		if (right) line(x + _, y + w, x + _, y + _); //right
		if (this.visited) {
			this.highLight();
		}
		// noFill()
		// rect(x,y,w,w)
	}
	highLight(alpha: number = 255) {
		var x = this.i * w;
		var y = this.j * w;
		fill(255, 100, 0, alpha);
		rect(x, y, w, w);
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
		if (neighbours.length > 0) {
			let r = floor(random(0, neighbours.length));
			return neighbours[r];
		} else {
			return undefined;
		}
	}
}
