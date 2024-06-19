import React from 'react'

const TodoList = (props) => {
  return (
     <div style={{width:"350px", display:"flex", justifyContent:"space-between", alignItems:"center",border:"1px solid black", height:"30px", position:"relative", left:"5%", top:"10px"}}>
            <li style={{listStyle:"none"}}>{props.item}</li>   <span style={{cursor:"pointer"}} onClick={e => {props.deleteListItem(props.index)}}>❌</span>
     </div> 
  )
}

export default TodoList