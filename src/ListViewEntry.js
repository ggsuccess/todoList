import React from 'react';

const ListViewEntry = (props) => {
  // const {listData} = props.lists;
  console.log(props)
  // deleteHandle = (e) => {
  //   e.preventDefault();
  //   let key = e.target.key;

  // }onClick={deleteHandle}
  return(
    <ul>
      <li className="toDolists">{props.data.message}
      <button className="message-delete-btn" >삭제하기</button></li>
      <hr></hr>
    </ul>
  )
}

export default ListViewEntry;