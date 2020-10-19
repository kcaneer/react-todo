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
        <div className="col-6 mx-auto">
          <Header />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
