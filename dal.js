let todos =  require('./todos')

function getTodos() {
  return todos;
}

function getTodo(itemId) {
  return todos.find(function(item) {
    return itemId == item.id
  })
}

function addTodo(input) {
  let newTodo = input;
  newTodo.complete = false;
  newTodo.id = (todos.length + 1)
  console.log(newTodo.length)
  todos.unshift(newTodo)
  return todos;
}

function finishTodo (itemId) {
  return todos.map(item => {
    if(item.id == itemId){
      item.complete = true
      return item
    } else {
      return item
    }
  })
}

function editTodo(itemId, updatedItem){
  return todos.map(item => {
    if(itemId == item.id){
      item.text = updatedItem.editItem;
      item.complete = false;
      return item
    }
  })
}

function getCompleteTodos () {
  let completeTodos = todos.filter(function (todo, idx, arr) {
    return todo.complete
  })
  return completeTodos
}

function getIncompleteTodos () {
  let incompleteTodos = todos.filter(function (todo, idx, arr) {
    return !todo.complete
  })
  return incompleteTodos
}


module.exports = {
  getTodos: getTodos,
  getTodo: getTodo,
  addTodo: addTodo,
  editTodo: editTodo,
  finishTodo: finishTodo,
  getCompleteTodos: getCompleteTodos,
  getIncompleteTodos: getIncompleteTodos
}
