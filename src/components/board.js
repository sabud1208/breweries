import React from 'react'
import BoardCard from './boardcard'
class Board extends React.Component {
  render(){
  

    return  (
      <div className = "board">
      <h2>Board</h2>
      {this.props.board1}
      </div>)
  }
}

export default Board
