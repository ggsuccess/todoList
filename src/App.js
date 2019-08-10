import React, {Component} from 'react';
import InputResi from './InputResi';
import './style.css';
import ListView from './ListView';

class App extends Component{
  constructor(props){
    super(props)
    this.listClick = this.listClick.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.state = {
      lists : [
       {
        message : '공부하기',
        key : -2,
        incomplete : false
      },{
        message : '어렵다...',
        key : -1,
        incomplete : false
      }] ,
      key : 0 
    }
  }
  listClick(){
    this.setState({
      lists : !this.state.lists.incomplete
    })
  }
  addToDo(value) {
    this.setState({
      lists : this.state.lists.concat({ ...value, key : this.state.key++, incomplete : false })
    })
    console.log(this.state.lists);
  }
  deleteToDo(key) {
    this.setState({
      lists : this.state.lists.filter(data=>{
        if(data.key === key){
          return data;
        }
      })
    })
  }
  render(){
    const style = {
      color : this.state.lists.incomplete ? 'red':'none'
    }
    console.log(this.state.lists);
    return(
      <div id="wrap">
        <div id="header">
          <p id="title">ToDo List</p>
          <InputResi addToDo={this.addToDo}/>
        </div>
        <div>
          <ListView  lists={this.state.lists} onClick={this.listClick} style={style} deleteToDo={this.deleteToDo}/>
        </div>
      </div>
    )
  }
}
export default App;