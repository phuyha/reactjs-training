import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./img/tick.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      currentFilter: "all", // 'all', 'active', 'completed'
      todoItems: [
        { title: "Buying Fruits", isComplele: true },
        { title: "Playing Soccer", isComplele: true },
        { title: "Working", isComplele: false }
      ]
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return event => {
      const isComplele = item.isComplele;

      this.setState(state => {
        const { todoItems } = state;
        const index = todoItems.indexOf(item);
        return {
          todoItems: [
            ...todoItems.slice(0, index),
            {
              ...item,
              isComplele: !isComplele
            },
            ...todoItems.slice(index + 1)
          ]
        };
      });
    };
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      // Enter key
      let text = event.target.value;

      text = text.trim();
      if (!text) {
        return;
      }

      this.setState(state => {
        const { currentFilter } = state;
        return {
          newItem: "",
          todoItems: [
            {
              title: text,
              isComplele: currentFilter === 'completed' ? true : false
            },
            ...this.state.todoItems
          ]
        };
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  onFilter(value) {
    return event => {
      switch (value) {
        case "all":
          this.setState({
            currentFilter: "all"
          });
          break;
        case "active":
          this.setState({
            currentFilter: "active"
          });
          break;
        case "completed":
          this.setState({
            currentFilter: "completed"
          });
          break;
        default:
          break;
      }
    };
  }

  render() {
    const { todoItems, newItem, currentFilter } = this.state;
    let currentItems = todoItems;
    if (currentFilter === "active") {
      currentItems = todoItems.filter(item => item.isComplele === false);
    } else if (currentFilter === "completed") {
      currentItems = todoItems.filter(item => item.isComplele === true);
    }

    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input
            type="text"
            placeholder="Add a new item"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {currentItems.length > 0 &&
          currentItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
        {currentItems.length === 0 && "Nothing here"}
        <div className="Footer">
          <button onClick={this.onFilter("all")}>All</button>
          <button onClick={this.onFilter("active")}>Active</button>
          <button onClick={this.onFilter("completed")}>Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
