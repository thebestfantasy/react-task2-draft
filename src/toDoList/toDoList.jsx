import React, { Component } from "react";
import ToDo from "../toDo/toDo.jsx";
import todoData from "../toDo/toDo.json";

class ToDoList extends Component {
  state = {
    toDoList: todoData,
  };

  handleCheck = (id) => {
    this.setState((prev) => {
      return {
        toDoList: prev.toDoList.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
      };
    });
  };

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        <ul className="list-group list-group-flush">
          {this.state.toDoList.map((todo) => (
            <ToDo key={todo.id} todo={todo} handleCheck={this.handleCheck} />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
