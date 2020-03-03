import React, {Component} from 'react'
import './App.css'
import Main from './components/Main';

class App extends Component {

  state = {
    personArr: [],
    id: ''
  }

  componentDidMount = () => {
    fetch ('./Data1.json')
      .then (response => response.json())
      .then (data => {
        let reqData = data.items
        this.setState({ personArr: reqData })
      })
  }

  handleClick = (e) => {
    let targetId = e.target.getAttribute('id')
    console.log(this.state.personArr[targetId])
  }

  render () {
    console.log(this.state.id)
    return (
      <div>
        // Add two buttons
        {/* <button onClick = {this}>Button 1</button> */}
        <Main persons = {this.state.personArr} clicked = {this.handleClick} />
      </div>
    )
  }
  
}

export default App;
