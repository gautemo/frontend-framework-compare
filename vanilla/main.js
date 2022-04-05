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
  const span = document.createElement('span')
  span.innerText = input.value
  const close = document.createElement('button')
  close.innerText = 'x'
  li.appendChild(span)
  li.appendChild(close)
  list.appendChild(li)
  close.addEventListener('click', () => list.removeChild(li))
  input.value = ''
  handleDisableButton()
}