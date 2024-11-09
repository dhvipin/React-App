import React, { useState } from 'react'
import './Body.css';

const Body = () => {

    const [data, setData] = useState([]);

    fetch('x-rapidapi-host: movie-database-alternative.p.rapidapi.com')
        .then((resopnse) => {
            return resopnse.json();
        })
        .then((data) => {
            console.log(data);
            setData(data);
        })
    return (
        <div className='box'>
            <div className="weatherbox">
                {/* <input type="search" placeholder="Search-here" id="city"/>
                <button>Search</button> */}
                <ul>
                    {
                        data.map((item) => (
                            <li key={item.id}>
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fultra-hd&psig=AOvVaw2kYctdXTMsnDrlo_DyNYM0&ust=1724391363317000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjfq8fwh4gDFQAAAAAdAAAAABAE" alt="" />
            </div>

        </div>
    )
}

export default Body