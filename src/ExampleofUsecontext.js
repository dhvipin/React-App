import React, { useContext ,createContext, useState } from 'react'
import Usecontext from './Usecontext';

let myContext = createContext();
const ExampleofUsecontext = () => {
    const [name, setName] = useState("");

    return (
        <myContext.Provider>
            <div>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
                <h2>Hello {name}</h2>
                <Anuu />

            </div>
        </myContext.Provider>
    )
}
let Anuu = () => {
    return (
        <div>
            <h2>
                heloo Anuu
            </h2>
            <Anshu/>

        </div>
    )
}
let Anshu = () => {
    let name = Usecontext(myContext);
    return (
        <div>
            <h2>HEllo Anshu</h2>

            <h2>Im {name}Friend</h2>
        </div>
    )
}

export default ExampleofUsecontext