//<------------------> Animations  <-------------------->

const upInput = () => {
  addAnotationIl.style.display = "flex"
  addAnotationsBotton.style.display = "none"

  const inputAnimate = addAnotationIl.animate([
    { 
      marginTop: "10%",
      opacity: "0%"
    },{
      marginTop: "0px",
      opacity: '100%'
    }
  ], 300)
}

const downInput = () => {

  const inputAnimate = addAnotationIl.animate([
    { 
      position: "inherit",
      left: "0px",
      opacity: "100%"
    },{
      position: "inherit",
      left: "10%",
      opacity: '0%'
    }
  ], 300)

  inputAnimate.addEventListener("finish", () => {
    addAnotationIl.style.display = "none"
    addAnotationsBotton.style.display = "flex"
    addNewNote()
  })
}

const newNote = id => {
  let note_animate = document.getElementById(`${id}`)

  note_animate.animate([{opacity: "0%"},{opacity:"100%"}],300)
}

const deleteNoteAnim = id => {
  let note_animate = document.getElementById(`${id}`)

  animate = note_animate.animate([{opacity: "100%"},{opacity:"0%"}],300)
  animate.addEventListener("finish", () => {
    init()
  })
}
