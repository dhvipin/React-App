import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [passowrd, setPassword] = useState('');
    const [loginstatus, setLoginstatus] = useState('');

    const handelchangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handelchangePassword = (e) => {

        setPassword(e.target.value);
    }


    const Login = () => {
        if (email == "Admin@gmail.com" && passowrd == "12345") {
            // alert('Login Sucessfull ')
            setLoginstatus('Login Sucessfull')
        }
        else (
            setLoginstatus('Login Fail')
        )




        console.log(email + " " + passowrd);

    }

    return (
        <div>

            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Email : </label>
                                <input type="text" placeholder='type-here' className='form-control' onChange={handelchangeEmail} />

                            </div>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Password: </label>
                                <input type="text" placeholder='type-here' className='form-control' onChange={handelchangePassword} />

                            </div>

                            <div className='mb-3'>

                                <input type="Button" onClick={Login} value="Submit" className='btn btn-primary' />

                            </div>
                            <label htmlFor="">{loginstatus}</label>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default LoginPage