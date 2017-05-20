import React from 'react'
import { connect } from 'react-redux'
import { swapTodos } from './actions'
import Todo from './Todo'
import styled from 'styled-components'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

const List = styled.div`
  &:hover {
    cursor: grab;
  }
`

const SortableTodo = SortableElement(Todo)

const TodoList = SortableContainer(({ todos }) => (
  <List>
    {todos.map((todo, key) => (
      <SortableTodo
        id={key}
        key={key}
        index={key}
        title={todo.title}
        done={todo.done}
      />
    ))}
  </List>
))

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSortEnd: ({ oldIndex, newIndex }) => {
      dispatch(swapTodos(oldIndex, newIndex))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
