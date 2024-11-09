import React, { useState } from 'react'

export const BMICalculator = () => {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [gender, setGender] = useState('');
    const [show, setShow] = useState();
    const [checkBox, setCheckBox] = useState({
        bike:'',
        pen:'',
        car:'',
        ninja:''

    });
    let handelCheckbox=(e)=>{
        const{name ,value}=e.target;
        setCheckBox({...checkBox,[name]:value});
    }
    let handelHeight = (e) => {
        setHeight(e.target.value);
    }
    let handelWeight = (e) => {
        setWeight(e.target.value);
        let calculate = height / weight;
        setShow(calculate);

    }
    let handelGender = (e) => {
        setGender(e.target.value);
    }

    
    return (
        <div>
            <h2>BMI Calculator</h2>
            <input type="number" placeholder='Enter your Age' />
            <input type="number" placeholder='Enter Height in CM' onChange={handelHeight} />
            <input type="number" placeholder='Enter Weight' onChange={handelWeight} />
            <div>
                <label htmlFor="">Select Gender:</label>

                <input type="radio" name='Gender' value='Male' onClick={handelGender} /> MALE

                <input type="radio" name='Gender' value='female' onClick={handelGender} /> FEMALE

                <input type="radio" name="Gender" id="" value='Other' onClick={handelGender} /> OTHER


            </div>
            <h4>{gender}</h4>
            <p>{show}</p>

            <input type="checkbox" name="bike" id="" onClick={handelCheckbox} value='Bike' />
            <label for="vehicle1"> Bike</label><br />
            <input type="checkbox" name="pen" id="" onClick={handelCheckbox} value='Pen' />
            <label for="vehicle1"> Pen</label><br />
            <input type="checkbox" name="car" id="" onClick={handelCheckbox} value='Car' />
            <label for="vehicle1"> Car</label><br />
            <input type="checkbox" name="ninja" id="" onClick={handelCheckbox} value='Ninja' />
            <label for="vehicle1">Ninja</label>

            <h2>{checkBox.bike}</h2>
            <h2>{checkBox.pen}</h2>
            <h2>{checkBox.car}</h2>
            <h2>{checkBox.ninja}</h2>
        </div>
    )
}
