import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

injectGlobal`
  html {
    color: #292f33;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.3125;
  }
  a {
    text-decoration: none;
  }
`

export class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <AddTodoForm />
      </div>
    )
  }
}

export default App
