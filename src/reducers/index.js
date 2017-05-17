import { combineReducers } from 'redux'
import { ADD_TODO, SET_INSERTING_TODO_TITLE, SWAP_TODOS, SET_TODO_DONE } from '../actions'

function todos(state = [], action) {
  let newTodos;

  switch(action.type) {
    case ADD_TODO:
      newTodos = state.slice()
      newTodos.push(action.todo)
      return newTodos

    case SET_TODO_DONE:
      newTodos = state.slice()
      newTodos[action.index].done = action.done
      return newTodos

    case SWAP_TODOS:
      newTodos = state.slice()
      var tmp = newTodos[action.index1]
      newTodos[action.index1] = newTodos[action.index2]
      newTodos[action.index2] = tmp
      return newTodos

    default:
      return state
  }
}

function activeTodo(state = {}, action) {
  switch(action.type) {
    case ADD_TODO:
      return { title: '' }

  	case SET_INSERTING_TODO_TITLE:
      return { title: action.title }

  	default:
      return state
  }
}

const reducers = combineReducers({todos, activeTodo})

export default reducers
