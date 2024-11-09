import React, { useState } from 'react'

const BillingSystem = () => {

    //let allData = ['Salad', 'Sandwich', 'Bread', 'Steak', 'Tuna Steak', "Fish", "Shrimp", "Rice"]

    const [input, setInput] = useState('');
    const [dataShow, setDatashow] = useState('');
    const [quantity, setQuantity] = useState('');
    const [tb,setTb]=useState();

    let handelInput = (e) => {
        setInput(e.target.value);

    }
    let handelQuantity = (e) => {
        setQuantity(e.target.value);
    }


    let onSubmit = () => {
        setDatashow(input);

        let bill=quantity*200;
        console.log(bill);
        setTb(bill);
        
        


    }
   
    return (
        <div>
            <h2>Billing System</h2>
            <input type="text" value={input} placeholder='Enter-Something' onChange={handelInput} />

            {/* <h4>{dataShow}</h4> */}

            <input type="number" placeholder='Number Of item' onChange={handelQuantity} />
            <input type="button" value='Add' onClick={onSubmit} />
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>

                        <td>NAME</td>

                        <td>Quantity</td></tr>
                </thead>

                <tbody>


                    <tr>

                        <td>{dataShow}</td>

                        <td>{quantity}</td>
                    </tr>

                    <tr>
                        <td>Toatal Bill :{tb}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default BillingSystem