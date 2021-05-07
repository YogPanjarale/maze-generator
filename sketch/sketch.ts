var cols: number, rows: number;
var w: number = 50;

var grid: Cell[] = [];
var stack:Cell[] = [];

var current: Cell;

let btn :p5.Element
function generateGrid() {
  grid=[]
  stack=[]
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
function setup() {
	console.log("🚀 - Setup initialized - P5 is running");
	createCanvas(500, 500);
  frameRate(15)
	generateGrid()
  btn=createButton("ReGenerate","Regenerate")
  btn.addClass('ripple')
  btn.mouseClicked(()=>{
    generateGrid()
  })
}
function generateMaze(){
  current.selfHighLight()
  //Step 1
  let next = current.checkNeighbours()
  if (next){
    next.visited=true
    //Step 2
    stack.push(current)
    current.inStack=true
    //Step 3
    removeWall(current,next)

    current=next
  }else if(stack.length>0){
    //Step 4
    current = stack.pop()
    current.inStack=false
  }else{
    generateGrid();
  }
}
function draw() {
	background(51);
  generateMaze()
	grid.forEach((cell) => {
		cell.show();
	});
	stack.forEach((cell) => {
		cell.highLightStack();
	});
}
