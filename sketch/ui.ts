function makeUi() {
    btn=createButton("ReGenerate","Regenerate")
    btn.addClass('ripple')
    btn.mouseClicked(()=>{
      generateGrid()
    })
}