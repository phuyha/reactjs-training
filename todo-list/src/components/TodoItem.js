import React, { Component } from 'react';
import './TotoItem.css';

class TodoItem extends Component {

  render() {
    const { item } = this.props;
    let className = 'TodoItem';

    if (item.isComplele) {
      className += ' TodoItem-complete';
    }
    return (
      <div className={className}>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}

export default TodoItem;