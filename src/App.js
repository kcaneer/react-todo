import 'bootstrap'
import React from 'react'
import Header from './Header'
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
        <Header/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
