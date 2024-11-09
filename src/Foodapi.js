import React, { useState } from 'react'

const Foodapi = () => {

    const [data, setData] = useState([]);
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then((res) => {
            return res.json();
            // console.log(res);

        })
        .then((menu) => {
            setData(menu)


        })



    console.log(data);

    return (
        <div>
            {
                data.map((meal) => (
                    <h2>{meal.meals}</h2>
                ))
            }
        </div>
    )
}

export default Foodapi