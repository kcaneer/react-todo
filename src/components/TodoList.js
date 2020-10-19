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
  addTodo() {
    //copy of current list of items so that i don't modify state directly
    
    let taskArray = this.state.list;

    const input={
      value: this.state.textInput,
      id: 1 + Math.random(),
      // status: active,
    }

    //push new input item to existing list
    taskArray.push(input);

    //update state iwth new list and reset input
    this.setState({
      list: taskArray,
      textInput: "",
    });
  }

  removeTodo(id) {
    let foundIndex = this.state.list.findIndex(item => item.id == id)
    this.state.list.splice(foundIndex, 1);
    this.setState({
      list: this.state.list,
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
            {this.state.list.map((obj) => {
              return(
              <li className="pt-1">
                {obj.value}
                <button
                  type="button"
                  onClick={() => this.removeTodo(obj.id)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            )})}
          </ul>
        </div>
          <footer className="fixed-bottom pb-5 text-center">
            You have {this.state.list.length} things left to do!
          </footer>
        </div>
    );
  }
}

export default TodoList;
