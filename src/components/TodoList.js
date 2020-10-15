import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      list: [],
    };
  }
  addTodo(input) {
    //copy of current list of items so that i don't modify state directly
    let taskArray = this.state.list;

    //push new input item to existing list
    taskArray.push(input);

    //update state iwth new list and reset input
    this.setState({
      list: taskArray,
      textInput: '',
    });
  }
 
  removeTodo() {
    console.log(this.state.textInput)
    let newArray = this.state.list.splice(0, this.state.textInput)
    this.setState({
      list: newArray,
      // textInput:'',
    })
  }
 
  modifyInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div className="row mx-auto">
        <div className="input-group mb-3">
          <input
            onChange={(e) => this.modifyInput("textInput", e.target.value)}
            type="text"
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
            <ul className="list-group">
              {this.state.list.map((val) => (
                <li>
                  {val} 
                  <button 
                  onClick= {() => this.removeTodo(this.state.textInput)}
                  type="button" 
                  class="btn btn-danger">
                     Delete
                  </button>
                </li>
              ))}
              {/* <button
            onClick:={() => this.removeTodo(this.state.textInput)}
            >Delete</button>} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
