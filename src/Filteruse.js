import React, { useState } from 'react'
import './Filteruse.css'





const Filteruse = () => {
    const [storedValue ,setValue] = useState('')
    
    const find =(f)=>{
        setValue(f.target.value);
    }

    return (

        <div>
            <ul>
                <li>All </li>
                <li onClick={find}>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>I</li>
                <li>J</li>
                <li>K</li>
                <li>L</li>
                <li>M</li>
                <li>N</li>
                <li>O</li>
                <li>P</li>
                <li>Q</li>
                <li>R</li>
                <li>S</li>
                <li>T</li>
                <li>U</li>
                <li>V</li>
                <li>W</li>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
            </ul>


            <table id='tbl'>
                <tbody>
                    <tr>
                        <th>S. No.</th>
                        <th>Advocate Name</th>
                        <th>Advocate Phone No.</th>
                        <th>Advocate Email</th>
                        <th>View</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td id='data' value={storedValue}>John Doe</td>
                        <td>0-123-456-789</td>
                        <td>john.doe@example.com</td>
                    </tr>
                    <tr >
                        <td >2</td>
                        <td id='data'>Jane Smith</td>
                        <td>0-987-654-321</td>
                        <td>jane.smith@example.com</td>
                        <td >View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td id='data'>Aohn Doe</td>
                        <td>0-123-456-789</td>
                        <td>Vohn.doe@example.com</td>
                    </tr>
                    <tr >
                        <td >2</td>
                        <td id='data'>Bane Smith</td>
                        <td>0-987-654-321</td>
                        <td>Cane.smith@example.com</td>
                        <td >View</td>
                    </tr>
                </tbody>
            </table>

        </div>


    )


}



export default Filteruse