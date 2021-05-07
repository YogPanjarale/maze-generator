function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}
var Cell = (function () {
    function Cell(i, j) {
        this.wallsB = [];
        this.walls = { top: true, bottom: true, left: true, right: true };
        this.visited = false;
        this.i = i;
        this.j = j;
    }
    Cell.prototype.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        var _ = 0;
        var _a = this.walls, top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
        if (top)
            line(x + _, y + _, x + w, y + _);
        if (left)
            line(x + w, y + _, x + w, y + w);
        if (bottom)
            line(x + w, y + w, x + _, y + w);
        if (right)
            line(x + _, y + w, x + _, y + _);
        if (this.visited) {
            this.highLight();
        }
    };
    Cell.prototype.highLight = function (alpha) {
        if (alpha === void 0) { alpha = 255; }
        var x = this.i * w;
        var y = this.j * w;
        fill(255, 100, 0, alpha);
        rect(x, y, w, w);
    };
    Cell.prototype.checkNeighbours = function () {
        var _a = this, i = _a.i, j = _a.j;
        var all = [];
        var neighbours = [];
        var top = grid[index(i, j - 1)];
        var right = grid[index(i + 1, j)];
        var bottom = grid[index(i, j + 1)];
        var left = grid[index(i - 1, j)];
        all = [top, right, bottom, left];
        all.forEach(function (c) {
            if (c && !c.visited) {
                neighbours.push(c);
            }
        });
        if (neighbours.length > 0) {
            var r = floor(random(0, neighbours.length));
            return neighbours[r];
        }
        else {
            return undefined;
        }
    };
    return Cell;
}());
var cols, rows;
var w = 50;
var grid = [];
var current;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(500, 500);
    frameRate(5);
    cols = floor(width / w);
    rows = floor(height / w);
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    current = grid[0];
}
function draw() {
    background(51);
    grid.forEach(function (cell) {
        cell.show();
    });
    var next = current.checkNeighbours();
    if (next) {
        next.visited = true;
        current = next;
    }
}
//# sourceMappingURL=../sketch/sketch/build.js.map