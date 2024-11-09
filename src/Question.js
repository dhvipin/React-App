import React, { useState } from 'react';

const Question = () => {
    const [name, setName] = useState('Vipin');

    let handelName = () => {
        setName('Vipin Dhingra');

    }


    return (
        <div>
            <button onClick={handelName}>Change</button>
            <h2>{name}</h2>
        </div>
    )
}

export default Question