import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.title } </p>
      </div>
    )
  }
}

export default TodoItem
