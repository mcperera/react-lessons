import React, { Component } from "react";
import "../css/App.css";
import TodoItems from "./TodoItems";
import todosData from "../todosData";
import Counter from "./Counter";

// function MiddleContent() {
//   const todoComponent = todosData.map((item) => (
//     <TodoItems key={item.id} itemProp={item} />
//   ));

//   return (
//     <div className="middle-content">
//       <h1>MiddleContent</h1>
//       {todoComponent}
//     </div>
//   );
// }

class MiddleContent extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handledChange = this.handledChange.bind(this);
  }

  handledChange(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodo,
      };
    });
  }
  render() {
    const todoComponent = this.state.todos.map((item) => (
      <TodoItems
        key={item.id}
        itemProp={item}
        handledChange={this.handledChange}
      />
    ));

    return (
      <div className="middle-content">
        <h1>MiddleContent</h1>
        {todoComponent}
        <Counter />
      </div>
    );
  }
}

export default MiddleContent;
