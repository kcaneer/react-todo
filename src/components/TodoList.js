import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      list: [],
    };
  }
//instead of input, use an 0bject that will store unique id, value ie: text, status ie: active
  addTodo(input) {
    //copy of current list of items so that i don't modify state directly
    let taskArray = this.state.list;

    //push new input item to existing list
    taskArray.push(input);

    //update state iwth new list and reset input
    this.setState({
      list: taskArray,
      textInput: "",
    });
  }

  removeTodo() {
    console.log(this.state.textInput);
    let newArray = this.state.list.splice(0, this.state.textInput);
    this.setState({
      list: newArray,
      // textInput:'',
    });
  }

  modifyInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  onKeyUpValue(event) {
    if (event.keyCode === 13) {
      this.addTodo(this.state.textInput);
    }
  }

  render() {
    // const input = document.getElementById('button-addon2')

    // input.addEventListener("keyup", function (event) {
    //     event.preventDefault();
    //     if (event.keyCode === 13) {
    //         addTodo();
    //     }

    return (
      <div className="container">
        <div className="row mx-auto pt-2">
          <div className="input-group mb-3">
            <input
              onChange={(e) => this.modifyInput("textInput", e.target.value)}
              type="text"
              onKeyUp={this.onKeyUpValue.bind(this)}
              className="form-control"
              placeholder="Add to List"
              value={this.state.textInput}
              aria-label="Add to List"
              aria-describedby="button-addon2"
              // onKeyPress={(event) => {
              //   if (event.keyCode === 13) {
              //     this.addTodo(this.state.textInput);
              //   }
              // }}
            />
            <div className="input-group-append">
              <button
                onClick={() => this.addTodo(this.state.textInput)}
                className="btn btn-outline-secondary"
                //button should push to tasks array
                type="button"
                id="button-addon2"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="list-group col col-3 mx-auto">
            {this.state.list.map((val) => (
              <li className="pt-1">
                {val}
                <button
                  type="button"
                  onClick={() => this.removeTodo(this.state.textInput)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
