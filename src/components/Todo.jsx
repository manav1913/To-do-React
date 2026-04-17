import React, { useEffect, useState } from 'react'
import "./Todo.css"

const Todo = () => {



    const [todoList, setTodoList] = useState(()=>{
        const saved = localStorage.getItem("todos")
        return saved ? JSON.parse(saved): []
    })
    const [input, setInput] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])

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
            <div className="todo-container">
                <div className="todo-box">
                    <h2 className="todo-title">Todo App</h2>

                    <div className="todo-input-section">
                        <input
                            type="text"
                            placeholder="Enter Todo..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="todo-input"
                        />
                        <button onClick={addTodo} className="add-btn">
                            {editIndex !== null ? "Update" : "Add"}
                        </button>
                    </div>

                    <div className="todo-list">
                        {todoList.map((todo, index) => (
                            <div key={index} className="todo-item">
                                <p className="todo-text">{todo}</p>

                                <div className="todo-actions">
                                    <button onClick={() => editTodo(index)} className="edit-btn">📝</button>
                                    <button onClick={() => deleteTodo(index)} className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo
