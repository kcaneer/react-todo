import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      list: [],
      // status: "",
      complete: [],
    };
  }

//instead of input, use an 0bject that will store unique id, value ie: text, status ie: active
  addTodo() {
    //copy of current list of items so that i don't modify state directly
    
    let taskArray = this.state.list;

    const input={
      value: this.state.textInput,
      id: Date.now(),
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
    let foundIndex = this.state.list.findIndex(item => item.id === id)
    this.state.list.splice(foundIndex, 1);
    this.setState({
      list: this.state.list,
    });
  }

  markCompleted(id) {
    let foundItem = this.state.list.find((item) => item.id === id);
    
    this.state.list.splice(foundItem, 1);
    
    let completeArray = this.state.complete;

    completeArray.push(foundItem);
  
    this.setState({
      complete: completeArray,
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

  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.list))
    localStorage.setItem('complete', JSON.stringify(this.state.complete))
  }

  componentDidMount() {
    if (localStorage.getItem('list') != null){
      var todolist = JSON.parse(localStorage.getItem('list'));
      this.setState({
        list: todolist,
      })
    }

    if (localStorage.getItem('complete') != null){
      var completed = JSON.parse(localStorage.getItem('complete'));
      this.setState({
        complete: completed,
      })
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
              className="form-control border-info"
              placeholder="Add to List"
              value={this.state.textInput}
              aria-label="Add to List"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                onClick={() => this.addTodo(this.state.textInput)}
                className="btn btn-info"
                //button should push to tasks array
                type="button"
                id="button-addon2"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col-8 mx-auto d-flex justify-content-between">
          <div className="row h-50 d-inline-block">
            <h5>To Do:</h5>
            <div className="row h-50 d-inline-block">
              <ul className="list-group col col-6 mx-auto">
                {this.state.list.map((obj, i) => {
                  return (
                    <li className="pt-1" key={i}>
                      {obj.value} <br />
                      <button
                        type="button"
                        onClick={() => this.removeTodo(obj.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => this.markCompleted(obj.id)}
                        className="btn btn-success btn-sm"
                      >
                        Completed
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row h-50 d-inline-block">
            <h5>Completed Tasks:</h5>
            <ul className="list-group col col-6 mx-auto">
              {this.state.complete.map((obj) => {
                return (
                  <li className="pt-1">
                    {obj.value} <br />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <footer className="fixed-bottom pb-5 text-center">
          You have {this.state.list.length} things left to do and you have
          completed {this.state.complete.length} tasks!
        </footer>
      </div>
    );
  }
}

export default TodoList;
