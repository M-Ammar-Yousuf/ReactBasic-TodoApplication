import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: "",
      list: [],
    };
  }

  addItem(todoText) {
    if (todoText !== "") {
      const newItem = {
        id: Date.now(),
        value: todoText,
        isDone: false,
      };

      const list = [...this.state.list];
      list.push(newItem);
      this.setState({ list, itemValue: "" });
    }
  }

  deleteItem(id) {
    if (id !== "") {
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList});
    }
  }

  updateItem(itemValue) {
    this.setState({ itemValue });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} alt="App Logo" width="100" height="100" />
          <h2>Todo List</h2>
          <input
            type="text"
            placeholder="Write a todo..."
            required
            value={this.state.itemValue}
            onChange={(e) => this.updateItem(e.target.value)}
          />
          <span
            className="addBtn"
            disabled={!this.state.itemValue.length}
            onClick={() => this.addItem(this.state.itemValue)}
          >
            Add
          </span>
        </div>

        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="delBtn"
                  onClick={() => this.deleteItem(item.id)}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
