import React from 'react'
import BrewCard from '../components/brewcard'


class BrewIndex extends React.Component {
  render(){

console.log("brewindex", this.props.allBrews);
  return (
      <div>
      <h1> BrewIndex </h1>
      {this.props.allBrews.length > 0 ? this.props.allBrews : <h1>Loading</h1>}
      </div>)
  }
}

export default BrewIndex;
