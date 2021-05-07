class Cell {
    i: number;
    j:number;
    constructor(i:number,j:number) {
        this.i=i
        this.j=j
    }
    show(){
        var x = this.i*w;
        var y = this.j*w;
        stroke(255)
        noFill()
        rect(x,y,w,w)
    }
}