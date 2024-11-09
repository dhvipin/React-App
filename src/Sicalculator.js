import React, { useState } from 'react'

const Sicalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [result, setResult] = useState('');

    let handelprincipal = (e) => {
        setPrincipal(e.target.value);
    }
    let handelrate = (e) => {
        setRate(e.target.value);
    }
    let handeltime = (e) => {
        setTime(e.target.value);
    }

    let si = () => {
        let p = parseFloat(principal);
        let r = parseFloat(rate);
        let t = parseFloat(time);

        if (!isNaN(p) && !isNaN(r) && !isNaN(t)){
            let si = (p*r*t)/100;
            setResult(si.toFixed(2));
        }
        else{
            setResult(null)
        }
    }


    return (
        <div className='container mt-5'>
            <form action="" className='form-control'>
                <label htmlFor="" className='form-label'>Princpal Amount</label>
                <input type="number " className='form-control' onChange={handelprincipal} name='principal' placeholder='Principal-amount-here' />

                <label htmlFor="">Rate of Intrest</label>
                <input type="number " className='form-control' onChange={handelrate} name='rate' placeholder='Rate-here' />

                <label htmlFor="">Time</label>
                <input type="number " className='form-control' onChange={handeltime} name='time' placeholder='Time-here' />

                <input type="button" onClick={si} className='btn btn-primary mt-3' value='Calculate ' />
            </form>
            <div>
                <h2>Here Is Return rs.</h2>
                <h3>here is Amount{principal}</h3>
                <h3>here is rate{rate}</h3>
                <h3>here is time{time}</h3>
                <h3>Result {result}</h3>
            </div>

        </div>
    )

}
export default Sicalculator