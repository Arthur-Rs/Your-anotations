let boldText = false;
let italicText = false;
let DecorationText = false

//------------- Update -------------

fontSize.addEventListener("input", () => {
  textArea.style.fontSize = `${fontSize.value}px`
})

fontColor.addEventListener("input", () => {
  textArea.style.color = `${fontColor.value}`
})

// text-align: start;

const alignLeft = () => {
  textArea.style.textAlign = "start"
}

const alignCenter = () => {
  textArea.style.textAlign = "center"
}

const alignRight = () => {
  textArea.style.textAlign = "end"
}

const alignJustify = () => {
  textArea.style.textAlign = "justify"
}

//text-decoration-style: dashed;
//font-weight: bold;
//font-style: italic;

const bold = () => {
  if (!boldText) {
    textArea.style.fontWeight = "bold"
    boldText = true 
    }else{ 
    textArea.style.fontWeight = ""
    boldText = false 
  }
}

const italic = () => {
  if (!italicText) {
    textArea.style.fontStyle = "italic"
    italicText = true 
    }else{ 
    textArea.style.fontStyle = ""
    italicText = false 
  }
}


const strikethrough = () => {
  if (!DecorationText) {
    textArea.style.textDecorationLine = "line-through"
    DecorationText = true 
    }else{ 
    textArea.style.textDecorationLine = ""
    DecorationText = false 
  }
}

const underlined = () => {
  if (!DecorationText) {
    textArea.style.textDecorationLine = "underline"
    DecorationText = true 
    }else{ 
    textArea.style.textDecorationLine = ""
    DecorationText = false 
  }
}
