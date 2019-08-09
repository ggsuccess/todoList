import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// class TodoListItem extends React.Component{
//   constructor(props){
//     super(props)
//       this.state = {
//         done : false
//       }
//     }
  
//   onListItemClick(){
//     this.setState({
//       done : !this.state.done
//     });
//   }
//   render(){
//     const style = {
//       //textDecoration : this.state.done ? 'line-through':'none'
//       backgroundColor : this.state.done ? 'red':'blue'
//     }
//     return(
//       <div>
//         <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todos}</li>
//       </div>
//     )
//   }
// }

// // const TodoList = (props) => (
// //   <ul>
// //     {props.todos.map(todo => <TodoListItem todo={todo}/>
// //     )}
// //   </ul>
// // )
// const App = () => (
//   <div>
//     <h2>TodoList</h2>
//       <TodoListItem
//       todos={[
//         ['cucumber'],['kale'],['diamond']
//       ]}
//       />
//   </div>
// )
// const TodoList = (props) => {
//   const onListItemClick = (event) =>{
//     console.log('I got clicked!');
//   };
//   return(
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li> 
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   )
// };


ReactDOM.render(<App />, document.getElementById('root'));