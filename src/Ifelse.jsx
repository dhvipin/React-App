import React from 'react'


const OddEven=(props)=>{
    let num=parseInt(props.number);
    if(num%2===0)
    {
        return <p>Even Numbder</p>
    }
    else
    {
        return <p>Odd Number</p>

    }
}

const Ifelse = () => {

  return (
    <div>
        <h2>If else statement Example</h2>
        <OddEven number='99'/>
    </div>
  )
}

export default Ifelse