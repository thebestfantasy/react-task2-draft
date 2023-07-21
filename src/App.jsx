import React, { Component } from "react";
import Header from "./Header/Header";
// import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDoList from "./toDoList/toDoList.jsx";
import FormSignUp from "./FormSignUp/FormSignUp.jsx";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = (data) => {
    const newUser = {
      id: nanoid(),
      isDev: true,
      ...data,
    };
    console.log(newUser);
  };

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <ToDoList />
        <FormSignUp createUser={this.createUser} />
        {/* <Counter /> */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <h2>Modal</h2>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
