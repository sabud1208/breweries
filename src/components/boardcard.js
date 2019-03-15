import React from 'react'

class BoardCard extends React.Component {
  render(){

    return (
      <div>
      <h3>{this.props.brewObj.name}</h3>
       <button onClick = {(e) => this.props.deleteCard(e, this.props.brewObj)}>Delete Card</button>
      </div>
    )
  }
}

export default BoardCard
