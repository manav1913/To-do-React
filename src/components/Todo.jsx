import React, { useState } from 'react'

const Todo = () => {

    

    const [todoList, setTodoList] = useState([])
    const [input, setInput] = useState("")

    const addTodo = () => {
        if(input === "") return

        setTodoList([...todoList, input])
        setInput ("")
    }

    const deleteTodo = (indexToDelete) => {
        const updatedTodo = todoList.filter((todo, index) => index !== indexToDelete)
        setTodoList(updatedTodo)
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
      {todoList.map((todo, index)=> <div key={index}>
        <p>{todo} <button onClick={() => deleteTodo(index)}>Delete</button></p>
      </div>)}
    </div>

    </>
  )
}

export default Todo
