import React from 'react';
import './App.css';
import List from './List';
import Form from './Form'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.onUpdate();
  }
  onUpdate = () => fetch('http://localhost:3000/tasks')
          .then(res => res.json())
          // function(jsonArray) { this.setState({ tasks: jsonArray}) }
          .then(jsonArray => this.setState({tasks: jsonArray}))
         
  render() {
    return (
      <div className="App">
        <h1>TO DO</h1>
        <Form />
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
