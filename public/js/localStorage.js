const storage = localStorage

const updateLocalStorage = () => {
  storage.setItem("your-anotations", null)
  storage.setItem("your-anotations", JSON.stringify(anotations))
}

const getLocalStorange = () => {
  return storage.getItem("your-anotations") == null 
  ? [] : JSON.parse(storage.getItem("your-anotations"))
}
