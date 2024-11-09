import React, { useState } from 'react'

const TodoList = () => {

    const [toDo, SetTodo] = useState('');

    let handelTodo = (e) => {
        SetTodo(e.target.value);
    }
    console.log(toDo);


    return (
        <div style={{ margin: "50px 10px 10px 600px", alignItems: "center", }}>

            <input type="text" onClick={handelTodo} placeholder='Add More-Task' />
            {/* <button >Add Task</button> */}

            <h3>{toDo}</h3>
            <button>Remove Task</button>


        </div>
    )
}

export default TodoList