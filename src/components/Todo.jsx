import React, { useState } from 'react'

const Todo = () => {

    

    const [todList, seTtodList] = useState([])
    const [input, setInput] = useState("")

    const addTodo = () => {
        if(input === "") return

        setTodList([...todList, input])
        setInput ("")
    }

    const deleteTodo = () => {
        
    }


  return (

    <>
    <div>
      <input type="text"
       placeholder='Enter Todo...'
       value={input}
       onChange={(e)=> setInput(e.target.value)}
       />
      <button onClick={addTodo}>Add</button>
      {todList.map((todo, index)=> <div key={index}>
        <p>{todo} <button onClick={deleteTodo}>Delete</button></p>
      </div>)}
    </div>

    </>
  )
}

export default Todo
