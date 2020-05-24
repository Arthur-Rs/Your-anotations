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