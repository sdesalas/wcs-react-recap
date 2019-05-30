import React, { Component } from 'react'

export default class List extends Component {

    onClick = taskId => {
      console.log('onClick', taskId);
      const url = 'http://localhost:3000/tasks/' + taskId;
      fetch(url, { 
                    method: 'PATCH', 
                    body: JSON.stringify({ finished: true }), 
                    headers: { 'Content-Type': 'application/json'} 
                })
        .then(res => res.json())
        .then(json => this.props.onUpdate()) 
        .catch(err => console.log(err));
    }

    render() {
        const sortedArray = 
           this.props.tasks.sort((a,b) => a.finished - b.finished);

        const unfinished = this.props.tasks.filter(task => !task.finished);
        const finished = this.props.tasks.filter(task => task.finished);

        return (
          <div>
            <p>You have {unfinished.length} unfinished items.. 
                   { unfinished.length ? 'chop chop.' : 'wohoo!'}</p>
            <ul>
              { sortedArray.map(task => 
                <li onClick={() => this.onClick(task.id)} 
                    className={ task.finished ? 'finished' : '' }>{ task.name } </li>
              ) }
            </ul>
          </div>
            
        )
    }
}
