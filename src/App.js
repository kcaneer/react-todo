import 'bootstrap'
import React from 'react'
import TodoList from './components/TodoList'


class App extends React.Component {
constructor() {
  super();
  this.state = {
    tasks : []
  }
}
  render() {
    return (
      <div className="App container">
        <TodoList/>
      </div>
    );
  }
}

export default App;
