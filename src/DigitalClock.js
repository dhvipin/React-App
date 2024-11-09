import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    const [date, setDate] = useState(new Date());
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




    useEffect(() => {
        const timeInterval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timeInterval);

    })
    let day = weekday[date.getDay()];

    return (
        <div style={{ marginLeft: "600px", marginTop: "50px" }}>

            <h2>{`${date.toLocaleDateString()}`}</h2>

            <h2>{`${date.toLocaleTimeString()}`}</h2>
            <h2>{day}</h2>

        </div>

    )
}

export default DigitalClock