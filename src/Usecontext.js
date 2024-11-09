import React, { createContext, useContext, useState } from 'react';
import './App.css';

const myContext = createContext();
const Usecontext = () => {

    const [age, setAge] = useState(23);

    return (
        <myContext.Provider value={age}>
            <div className='App'>
                <h1>Hi Harvi</h1>
                <input type="number" onChange={(e) => { setAge(e.target.value) }} />
                <Vipin />

            </div>
        </myContext.Provider>

    );

};
let Vipin = () => {

    return (
        <div>
            <h2>Hello Rohit</h2>
            <Shiv/>

        </div>
    )

}

let Shiv = () => {
    const age =useContext(myContext);
    return (
        <div>
            <h2>Heloo</h2>
            <h2>Age {age}</h2>

        </div>
    )
}


export default Usecontext