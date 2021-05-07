type Walls = {
	top: boolean;
	left: boolean;
	bottom: boolean;
	right: boolean;
};

class Cell {
	i: number;
	j: number;
	wallsB: boolean[] = [];
	walls: Walls = { top: false, bottom: false, left: true, right: true };
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

		// noFill()
		// rect(x,y,w,w)
	}
}
