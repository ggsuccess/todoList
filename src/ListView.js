import React,{Component} from 'react';
import ListViewEntry from './ListViewEntry';

// const ListView = (props) => {
//   const listClick = (event) =>{
//     console.log('클릭됨')
//   }
//   const {datalists}=props;
//   return( 
//   // <ul>
//   //   <li onClick={listClick} style={props.style}>{lists}</li>
//   //   <li>안녕</li>
//   //   <li>우리</li>
//   // </ul>  
//     <div>
//       {datalists.map(lists=>{
//         <ListViewEntry lists={lists} key={lists.id} message={lists.message} onClick={listClick}/>
//       })}
//     </div>
//   )
// }
class ListView extends Component{
  // deleteToDos = (key) =>{
  //   onClick(key);
  // }
  render(){
    // const {listData} = this.props;
    console.log(this.props);
    return(
      <div>
    {this.props.lists.map(data =>
      <ListViewEntry data={data} key={data.key} onClick={this.props.listClick} style={this.style} deleteToDos={this.deleteToDo}/>
    )}
    </div>
    );
    // console.log(listData)
    //return(
      // listData.map(data =>{
      //   return(<ListViewEntry listData = {data}/>)
      // }
    //  )
  }
}
export default ListView;