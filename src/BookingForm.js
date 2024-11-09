import React, { useState } from 'react'
import './BokkingForm.css';

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
const BokkingForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        departure: '',
        arrival: '',
        date: '',
        passengers: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send the data to a server
        console.log('Form submitted:', formData);
    };

    return (

        <div className="App">
            <h1>Bus Booking Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="pname"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="pemail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Departure City:</label>
                    <select
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select departure city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Arrival City:</label>
                    <select
                        name="arrival"
                        value={formData.arrival}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select arrival city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Number of Passengers:</label>
                    <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <button type="submit">Book Now</button>
            </form>
                        
        </div>
    )

}

export default BokkingForm