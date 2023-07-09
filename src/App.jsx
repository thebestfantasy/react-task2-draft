import { Component } from "react";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDo from "./toDo/toDo";
import todo from "./toDo/toDo.json";

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

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Counter />
        <ToDo todo={todo} handleClick={} />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <h2>Modal</h2>
          </Modal>
        )}
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="container">
//       <Header />
//       <Counter />
//       <Modal>
//         <h2>Modal</h2>
//       </Modal>
//     </div>
//   );
// };

export default App;
