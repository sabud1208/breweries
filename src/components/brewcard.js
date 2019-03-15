import React from 'react'

class BrewCard extends React.Component {
  render(){

    return (
      <div>
      <h3>{this.props.brewObj.name}</h3>
      <select  onChange= {(e) => this.props.changeHandle(this.props.brewObj, e)}>
      <option > Select Board </option>
      <option value = "board1"> Board 1 </option>
      </select>
      </div>
    )
  }
}

export default BrewCard
