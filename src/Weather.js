import React, { useState } from 'react'




const Weather = () => {
    const [userdata, setUserdata] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setUserdata(data);
            console.log(data);

        })

    return (
        <div> {
            userdata.map((user) => (
                <ol>{user.id + " Name : " + user.name + " " + "  Phone No :  " + user.phone + "  Email : " + user.email}</ol>
            ))
        }


            {/* <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                        <td>WebSite</td></tr>
                </thead>

                <tbody>
                    {
                        userdata.map((user) =>
                        (
                            <tr>
                                <td>
                                    {user.id}
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        )



                        )
                    }




                </tbody>
            </table> */}

        </div>
    )
}

export default Weather