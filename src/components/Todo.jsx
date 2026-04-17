import React, { useState } from 'react'

const Todo = () => {

    

    const [todoList, setTodoList] = useState([])
    const [input, setInput] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    const addTodo = () => {
        if (input.trim() === "") return

        if (editIndex !== null) {
            const updated = todoList.map((todo, index) =>
            index === editIndex ? input : todo
            )
            setTodoList(updated)
            setEditIndex(null)
        } else {
            setTodoList([...todoList, input])
  }

  setInput("")
}

    const deleteTodo = (indexToDelete) => {
        const updatedTodo = todoList.filter((todo, index) => index !== indexToDelete)
        setTodoList(updatedTodo)
    }

    const editTodo = (indexToEdit) => {
        setInput(todoList[indexToEdit])
        setEditIndex(indexToEdit)
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
        <p>{todo} 
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={()=> editTodo(index)}>📝</button>
            </p>
      </div>)}
    </div>

    </>
  )
}

export default Todo
