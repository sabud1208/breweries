import React, { Component } from 'react';
import './App.css';
import BoardContainer from './containers/boardcontainer'
import BrewIndex from './containers/brewindex'
import BrewCard from './components/brewcard'
import BoardCard from './components/boardcard'
class App extends Component {
  state={
    breweries: [],
    board1: []
  }
changeHandle = (value, e) => {
  e.persist()
  let arrayOfObj = [...this.state[e.target.value], value]
  this.setState({[e.target.value] : arrayOfObj})
}
deleteCard = (e, object) => {
  let board1Copy = [...this.state.board1]
  let filteredCopy =board1Copy.filter(brewObj => brewObj.id !== object.id)
  this.setState({board1: filteredCopy})
  debugger
}

handleSumbit = e => {
  e.preventDefault()
  console.log(e);
}

componentDidMount(){
  fetch('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(breweries => this.setState({breweries: breweries})
)
}

  render() {
    console.log(this.state.board1);
    let arrayOfBrews = this.state.breweries.map(brewObj => <BrewCard key={brewObj.id} brewObj={brewObj} changeHandle = {this.changeHandle}/>)
    let board1 = this.state.board1.map(brewObj => <BoardCard key={brewObj.id} brewObj={brewObj} deleteCard = {this.deleteCard}/>)
    return (
      <div className="flex">
      <BrewIndex className = "floatLeft" allBrews = {arrayOfBrews}/>
      <BoardContainer className= "floatRight" board1 = {board1} handleSumbit = {this.handleSumbit}/>

      </div>
    );
  }
}

export default App;
