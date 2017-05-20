import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setTodoDone } from './actions'

const Container = styled.div`
  font-size: 32px;
  user-select: none;
  padding: 0.2rem 0;
`

const Input = styled.input`
  height: 28px;
  width: 28px;

  &:hover {
    cursor: pointer;
  }
`

const Title = styled.a`
  color: black;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`

export const Todo = ({ id, title, done, setTodoDone }) => (
  <Container>
    <Input
      type="checkbox"
      onChange={() => setTodoDone(id, !done)}
      checked={done}
    />
    <Title done={done}>{title}</Title>
  </Container>
)

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTodoDone }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
