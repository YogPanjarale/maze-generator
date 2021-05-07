var Cell = (function () {
    function Cell(i, j) {
        this.i = i;
        this.j = j;
    }
    Cell.prototype.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        noFill();
        rect(x, y, w, w);
    };
    return Cell;
}());
var cols, rows;
var w = 50;
var grid = [];
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(500, 500);
    cols = floor(width / w);
    rows = floor(height / w);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}
function draw() {
    background(51);
    grid.forEach(function (cell) {
        cell.show();
    });
}
//# sourceMappingURL=../sketch/sketch/build.js.map