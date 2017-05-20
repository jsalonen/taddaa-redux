export const ADD_TODO = 'ADD_TODO'
export const SET_INSERTING_TODO_TITLE = 'SET_ACTIVE_TODO_TITLE'
export const SWAP_TODOS = 'SWAP_TODOS'
export const SET_TODO_DONE = 'SET_TODO_DONE'

export function addTodo(title) {
  return { type: ADD_TODO, todo: { done: false, title: title } }
}

export function setInsertingTodoTitle(title) {
  return { type: SET_INSERTING_TODO_TITLE, title: title }
}

export function swapTodos(index1, index2) {
  return { type: SWAP_TODOS, index1: index1, index2: index2 }
}

export function setTodoDone(index, done) {
  return { type: SET_TODO_DONE, index: index, done: done }
}
