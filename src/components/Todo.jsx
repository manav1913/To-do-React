import React, { useState } from 'react'

const Todo = () => {

    let todos = []

    const [todList, settodList] = useState(todos)



  return (

    <>
    <div>
      <input type="text" placeholder='Enter Todo...' />
      <button>Add</button>
      {todList.map((todo, index)=> <div key={index}>
        <p>{todo}</p>
      </div>)}
    </div>

    </>
  )
}

export default Todo
