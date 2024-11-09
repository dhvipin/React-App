import React from 'react'




let Am = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();


    console.log(date);
    console.log(hours);
    console.log(min);
    console.log(sec);

    if (hours >= 11 && hours <= 4) {
        console.log("Its Afternoon Started now 'Good AfterNoon'..")

    }
    else if (hours > 4) {
        console.log("Its Evening Started now 'Good Evening '")
    }
    else if (hours >= 1) {
        console.log("Its Morning Started now 'Good Morning'")
    }
}

const Sedual = () => {
    return (
        <div>
            <Am />
        </div>
    )
}



export default Sedual