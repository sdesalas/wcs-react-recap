import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props);
      this.state = { name: "", finished: false }
    }
    onSubmit = event => {
      console.log('onSubmit');
      const url = 'http://localhost:3000/tasks';
      fetch(url, { 
                    method: 'POST', 
                    body: JSON.stringify(this.state), 
                    headers: { 'Content-Type': 'application/json'} 
                })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
      event.preventDefault();
    }
    render() {
        return (
          <form onSubmit={this.onSubmit}>
            <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
            <button>Add</button>
          </form>
        )
    }
}
