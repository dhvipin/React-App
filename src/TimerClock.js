import React, { useEffect, useState } from 'react'

const TimerClock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    })

    let getHour = date.getHours();
    let getMin = date.getMinutes();
    let getSecond = date.getSeconds();
    // setInterval(date, 1000);


    return (
        <div style={{ display: "flex", border: "1px solid black", alignItems: "center", }}>

            <h1>{getHour}</h1>
            <h1>:{getMin}</h1>
            <h1>:{getSecond}</h1>
        </div>
    )
}



export default TimerClock