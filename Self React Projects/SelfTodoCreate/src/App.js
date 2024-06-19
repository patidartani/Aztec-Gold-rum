import React, { useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (input) => {
    if(input !== ' ')
    setListTodo([...listTodo, input])
  }

  const deleteListItem = (key) => {
     let newListTodo = [...listTodo];
     newListTodo.splice(key, 1)
     setListTodo([...newListTodo])
  }

  return (
    <div>
      <TodoInput addList={addList} />
       <div className="content">
         <h5>Todo</h5>
         <hr />
         {listTodo.map((listItem, i) => {
          return(
            <TodoList key={i} index={i} item={listItem} deleteListItem={deleteListItem}/>
          )
         })}
       </div>
    </div>
  )
}

export default App