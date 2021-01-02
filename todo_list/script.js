const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
  todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText

    // here is the logic for completing a todo wehn left click 
    todoEl.addEventListener('click', () => { 
      todoEl.classList.
      toggle('completed')
      updateLS()
    }) 

    //  here is the code for removing a todo when right clicked

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      todoEl.remove()
      updateLS()
    })

    todosUL.appendChild(todoEl)

    input.value = ''

    updateLS()
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li')
  const todos = []

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains
        ('completed')
    })
  })
  localStorage.setItem('todos', JSON.stringify(todos)) 
  //  we need to wrap in stringify because it is an array
} 