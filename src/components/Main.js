import React, { Component } from 'react'
import Person from './Person';

class Main extends Component {
  render() {
    return (
      <div>
        {
          this.props.persons.map(person => {
            return <Person person = {person} clicked = {this.props.clicked} key = {person.id} />
          })
        }
      </div>
    )
  }
}

export default Main;