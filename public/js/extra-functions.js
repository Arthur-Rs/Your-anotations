// <----------------> extra functions <---------------->

const getElements = () => {
  addAnotationIl = document.querySelector("#new-name")
  addAnotationsBotton = document.querySelector("#add-note")
  anotationsUl = document.querySelector("#notes")
  getName = document.querySelector("#name")
}

const getNewId = () => {
  const newId = Math.floor(Math.random() * 1000)
  anotations.forEach(element => {
    element.id == newId ? getNewId() : null
  })
  return newId
}

const clearUl = () => {
  anotationsUl.innerHTML = `
  <li class="new-name" id="new-name">
    <input type="text" id="name" placeholder="Nome"></input>
    <i class="material-icons" id="add-new-note" 
    onclick="downInput()">add_circle</i>
  </li>

  <li class="add-note">
    <a class="material-icons" id="add-note" onclick="upInput()">
    add_circle</a>
  </li>`
  getElements()
}

getNoteById = id => {
  return anotations.filter((element) => 
  {
    return element.id == id ? true : false
  })
}

const block = () => {
  let haver = false

  anotations.every(element => {
    if(activedNote == element.id){
      haver = true
      return true
    }else{
      return false
    }
  });

  if (!haver){
    textArea.value = "Selecione uma anotação antes de escrever"
    return false
  }else{
    if(textArea.value == "Selecione uma anotação antes de escrever"){
      textArea.value = ""
    }
    return true
  }
} 

const selectedNote = () => {
  
  anotations.forEach(element => {
    if(element.id == activedNote){
      note = document.getElementById(`${element.id}`)
      note.style.backgroundColor = "#2c7065"
      note.children[0].style.color = "#f1f5f1"
      note.children[0].style.border = "#f1f5f1"
      note.style.borderRadius = "5px"
    }else{
      note = document.getElementById(`${element.id}`)
      note.style.backgroundColor = "#dfe9e4"
      note.children[0].style.color = "#2c7065"  
      note.style.borderRadius = "5px 0px 0px 5px"
  }});

}