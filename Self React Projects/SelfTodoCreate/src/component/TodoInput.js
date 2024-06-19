import React, { useState } from 'react'

const TodoInput = (props) => {
          const [input, setInput] = useState('')
          return (
                    <div className='container mt-5'>
                              <input type="text" className='input-box-todo' placeholder='Enter Your Todo' value={input} onChange={e => { setInput(e.target.value) }} />
                              <button className='btn btn-primary ms-3' onClick={() => {
                              props.addList(input)
                              setInput("")
                              }}>➕</button>

                    </div>
          )
}

export default TodoInput