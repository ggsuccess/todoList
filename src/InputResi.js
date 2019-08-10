import React, {Component} from 'react';

// const InputResi = (props) => {
//   const addToDo = (event) => {
//     props.addToDo(event.target.value);
//   }
//   let inputText = document.querySelector('.input-text');
//   return(
//   <div className="input-nav">
//     <input className="input-text" type="text"/>
//     <button className="input-btn" onClick={props.addToDo}>ADD</button>
//   </div>
//   )
// };

class InputResi extends Component{
  state = {
    message : ''
  }
  handlingChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  };
  handlingSubmit = (e) => { 
    const {addToDo} = this.props;
    addToDo(this.state);
  };
  render(){
    return(
    <div className="input-nav">
      <input className="input-text" type="text" name={'message'} onChange={this.handlingChange} value={this.state.value}/>
      <button className="input-btn" onClick={this.handlingSubmit}>ADD</button>
    </div>
    )
  }
}
export default InputResi;