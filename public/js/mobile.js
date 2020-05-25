let mobile = window.innerWidth < 650 ? true : false


getNotes = ()=> {
  boxAnotations.style.display = "flex"
  let animate = boxAnotations.animate([{
    "left": "-500px",
    "opacity": "0%"
  },{
    "left": "0px",
    "opacity": "100%"
  }],300)
}

closeNotes = () =>{
  let animate = boxAnotations.animate([{
    "left": "0px",
    "opacity": "100%"
  },{
    "left": "-500px",
    "opacity": "0%"
  }],300)
  animate.addEventListener("finish", ()=>{
    boxAnotations.style.display = "none"
  })
}