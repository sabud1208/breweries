import React from 'react'
import Board from '../components/board'

class BoardContainer extends React.Component{
  state={
    name: ''
  }

  changeHandle = (e) =>{
    this.setState({name: e.target.value})

  }
 render(){
   console.log(this.state.name);
   return (
      <div>
     <h1>Board Container</h1>
     <form onSubmit= {this.props.handleSumbit}>
     <input type = "text" name= "name" value= {this.state.name} onChange= {this.changeHandle}/>
     <input type = "submit" value ='Submit'/>
     </form >
     <Board board1 = {this.props.board1} />
     </div>
   )
 }
}

export default BoardContainer
