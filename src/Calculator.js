import React, { useState } from 'react'
import './Calculator.css'

export const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    let handelInput = (value) => {
        setInput(input + value);
        console.log(input);

    }

    let handelResult = () => {
        try {
            setInput(eval(input).toString());
        }
        catch (error) {
            setResult('Error');
        }

    };

    const handelClearinput = () => {
        setInput("");
        setResult("");
    };


    // let handelBackspace =()=>{
    //     setInput((prevInput))
    // }

    return (
        <div className='container mt-5'>
            <div className="show">{input} {result}</div>
            <ul>
                <li onClick={() => handelInput("1")} >1</li>
                <li onClick={() => handelInput("2")}>2</li>
                <li onClick={() => handelInput("3")}>3</li>
                <li onClick={() => handelInput("4")}>4</li>

            </ul>

            <ul>
                <li onClick={() => handelInput("5")}>5</li>
                <li onClick={() => handelInput("6")}>6</li>
                <li onClick={() => handelInput("7")}>7</li>
                <li onClick={() => handelInput("8")}>8</li>
            </ul>

            <ul>
                <li onClick={() => handelInput("9")}>9</li>
                <li onClick={() => handelInput("0")}>0</li>
                <li onClick={() => handelInput("+")}>+</li>
                <li onClick={() => handelInput("-")}>-</li>

            </ul>
            <ul>
                <li onClick={() => handelInput("*")}>*</li>
                <li onClick={() => handelInput("/")}>/</li>
                <li onClick={handelResult}>=</li>
                <li onClick={handelClearinput}>C</li>
            </ul>


        </div>
    )
}
