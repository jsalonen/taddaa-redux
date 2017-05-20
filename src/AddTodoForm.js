import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from "styled-components"
import { addTodo, setInsertingTodoTitle } from "./actions"

const Container = styled.div`
`

const Input = styled.input`
  font-size: 32px;
`

const Button = styled.button`
  margin-left: 8px;
  font-size: 32px;
`

export class AddTodoForm extends Component {
  clickAddButton = () => {
    this.props.addTodo(this.props.title)
    this.titleInput.focus()
  }

  titleKeyPress = evt => {
    if (evt.key === "Enter") {
      this.props.addTodo(this.props.title)
    }
  }

  titleChange = evt => {
    this.props.setInsertingTodoTitle(evt.target.value)
  }

  render() {
    return (
      <Container>
        <Input
          type="text"
          value={this.props.title}
          innerRef={input => {
            this.titleInput = input
          }}
          onKeyPress={this.titleKeyPress}
          onChange={this.titleChange}
        />
        <Button onClick={this.clickAddButton}>
          Add todo
        </Button>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.activeTodo.title
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ addTodo, setInsertingTodoTitle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
