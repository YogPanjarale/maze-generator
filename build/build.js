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
        this.inStack = false;
        this.i = i;
        this.j = j;
    }
    Cell.prototype.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        push();
        stroke(255);
        strokeWeight(5);
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
        if (!(this.inStack || this.visited)) {
            var x = this.i * w;
            var y = this.j * w;
            noStroke();
            fill(255, 255, 255);
            rect(x, y, w, w);
        }
        pop();
        noFill();
    };
    Cell.prototype.highLight = function (alpha) {
        if (alpha === void 0) { alpha = 255; }
        push();
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(255, 120, 30, alpha);
        rect(x, y, w, w);
        pop();
    };
    Cell.prototype.highLightStack = function () {
        push();
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(255, 120, 100, 150);
        rect(x, y, w, w);
        pop();
    };
    Cell.prototype.selfHighLight = function (alpha) {
        if (alpha === void 0) { alpha = 255; }
        push();
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(255, 100, 0, alpha);
        rect(x, y, w, w);
        pop();
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
        neighbours.forEach(function (n) { return n.highLight(50); });
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
function removeWall(a, b) {
    var x = a.i - b.i;
    var y = a.j - b.j;
    switch (x) {
        case 1:
            a.walls.right = false;
            b.walls.left = false;
            break;
        case -1:
            a.walls.left = false;
            b.walls.right = false;
            break;
    }
    switch (y) {
        case 1:
            a.walls.top = false;
            b.walls.bottom = false;
            break;
        case -1:
            a.walls.bottom = false;
            b.walls.top = false;
            break;
    }
}
function generateGrid() {
    grid = [];
    stack = [];
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
function generateMaze() {
    current.selfHighLight();
    var next = current.checkNeighbours();
    if (next) {
        next.visited = true;
        stack.push(current);
        current.inStack = true;
        removeWall(current, next);
        current = next;
    }
    else if (stack.length > 0) {
        current = stack.pop();
        current.inStack = false;
    }
    else {
        if (loopGenerate)
            generateGrid();
    }
    stack.forEach(function (cell) {
        cell.highLightStack();
    });
}
var cols, rows;
var w = 50 / 2;
var grid = [];
var stack = [];
var current;
var loopGenerate = false;
function setup() {
    console.log("???? - Setup initialized - P5 is running");
    createCanvas(500, 500);
    frameRate(50);
    generateGrid();
    makeUi();
}
function draw() {
    background(51);
    generateMaze();
    grid.forEach(function (cell) {
        cell.show();
    });
}
var btn, r1, slider;
function makeUi() {
    var div = createDiv("\n    <button id=\"btn1\" class=\"ripple\"> Regenerate</button>\n    <button id=\"btn2\" class=\"ripple\">No Loop \u25A1</button>\n    ");
    r1 = document.getElementById("btn1");
    r1.onclick = function () { return generateGrid(); };
    btn = document.getElementById("btn2");
    btn.onclick = function () {
        loopGenerate = !loopGenerate;
        btn.innerHTML = loopGenerate ? "No Loop ???" : "Loop ???";
    };
    slider = createSlider(1, 75, 50, 1);
    slider.id("sl");
    var t = createP("50");
    t.id("frameRate");
    var fr = document.getElementById("frameRate");
    setInterval(function () {
        var v = Number(slider.value());
        frameRate(v);
        fr.innerHTML = String(v);
    }, 100);
}
//# sourceMappingURL=../sketch/sketch/build.js.map