const list = document.querySelector('ul')

const addButton = document.querySelector('#todo-add')
addButton.addEventListener('click', addTodo)
const input = document.querySelector('#todo-input')
input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTodo()
  }
})
input.addEventListener('input', handleDisableButton)

function handleDisableButton(){
  addButton.disabled = !input.value
}

function addTodo(){
  const li = document.createElement('li')
  li.innerText = input.value
  list.appendChild(li)
  input.value = ''
  handleDisableButton()
}