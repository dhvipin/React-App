import React, { useState } from 'react'

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    let handelCount = () => {

        setCount((c) => c + 1);
    }


    const handelTodo = () => {
        setTodo((t) => [...t, "New todo"])


    };

    return (
        <div>
            <input type="button" value='Click ' onClick={handelCount} />
            <p>Count {count}</p>
            <button onClick={handelTodo}>addTodo</button>
            <p>Add to do   {todo}</p>
        </div>
    )
}

export default UseCallback