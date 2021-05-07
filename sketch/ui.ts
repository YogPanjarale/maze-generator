let btn: HTMLElement, r1: HTMLButtonElement | HTMLElement, slider: p5.Element;
function makeUi() {
	let div = createDiv(`
    <button id="btn1" class="ripple"> Regenerate</button>
    <button id="btn2" class="ripple">No Loop □</button>
    `);
	r1 = document.getElementById("btn1");
	r1.onclick = () => generateGrid();
	btn = document.getElementById("btn2");
	btn.onclick = () => {
		loopGenerate = !loopGenerate;
		btn.innerHTML = loopGenerate ? "No Loop □" : "Loop ■";
	};
	slider = createSlider(1, 50, 15, 1);
	slider.id("sl");
    let t = createP("15")
    t.id("frameRate")
	let fr = document.getElementById("frameRate");
	setInterval(function () {
		let v = Number(slider.value());
		frameRate(v);
        
		fr.innerHTML = String(v);
	}, 100);
	// r1=createButton("☐")
	// btn=createButton("ReGenerate","Regenerate")
	// btn.addClass('ripple')
	// btn.mouseClicked(()=>{
	//   generateGrid()
	// })
}
