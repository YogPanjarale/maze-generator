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
        if (loopGenerate) generateGrid();
    }
    stack.forEach((cell) => {
		cell.highLightStack();
	});
  }