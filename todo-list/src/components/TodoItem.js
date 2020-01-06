import React, { Component } from 'react';
import './TotoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isComplele) {
      url = checkCompleteImg;
    }

    return (
      <div className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplele
      })}>
        <img onClick={onClick} src={url} width={32} height={32} />
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}

export default TodoItem;