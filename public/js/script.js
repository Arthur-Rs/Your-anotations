
let anotations = getLocalStorage()

let activedNote = 0;


// <----------------> Manipulations functions <---------------->

const addNewNote = () => {
  
  if (getName.value.trim() == ""){
    alert("Escreva um nome para sua anotação")
    return
  }
  id = getNewId()
  anotations.push({
    id: id,
    name: getName.value,
    text: ""
  })
  block()
  init()
  newNote(id)
  activedNote = id
 
}

const deleteNote = id =>{
  anotations = anotations.filter(element => {
    return element.id != id ? true : false
  })
  deleteNoteAnim(id)
  block()
}

const selectNote = id => {
  const select = anotations.filter(element=>{
    return element.id === id ? true : false
  })
  activedNote = id
  textArea.value = select[0].text
  selectedNote()
  closeNotes  
  if(mobile){
    closeNotes()
  }
}


// <----------------> Incremental functions <---------------->

const addNoteToDOM = (note) => {
  let li = document.createElement("li")
  li.classList.add("note")
  li.id = note.id
  li.innerHTML = `
  <p>${note.name}</p>
  <a href="#" class="material-icons" onclick="deleteNote(${note.id})">clear</a>`

  anotationsUl.prepend(li)
}

const init = () => {
  updateLocalStorage()
  clearUl()
  anotations.forEach(element => {
    addNoteToDOM(element)
  });
  selectedNote()
}

// <----------------> Events <---------------->

//select anotation
anotationsUl.addEventListener("click", (event) => {
  anotations.forEach(element => {
    event.toElement.id == element.id ? selectNote(element.id) : null
  });
})


//auto save
textArea.addEventListener("input", () => {
  if(!block()){
    return false
  }

  const anotation = getNoteById(activedNote)
  anotation[0].text = textArea.value

  anotations.forEach(element => {
    element.id == anotation[0].id ? element.text = anotation[0].text : null
  });

  init()
})

init()
block()
