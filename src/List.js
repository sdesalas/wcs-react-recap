import React, { Component } from 'react'

export default class List extends Component {

    render() {
        return (
            <ul>
              { this.props.tasks.map(task => 
                <li className={ task.finished ? 'finished' : '' }>{ task.name } </li>
              ) }
            </ul>
            
        )
    }
}
