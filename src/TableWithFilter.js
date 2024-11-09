import React, { useState } from 'react';

const TableWithFilter = () => {
    // Initial data for the table
    const initialData = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 },
        { id: 4, name: 'David', age: 40 },
        { id: 5, name: 'Kavin', age: 20 },
        { id: 6, name: 'Jkin', age: 30 },
    ];

    // State to store the data and filter term
    const [data, setData] = useState(initialData);
    const [filter, setFilter] = useState('');

    // Function to handle input change
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    // Filter the data based on the filter term
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Data Table</h1>
            <input
                type="text"
                placeholder="Filter by name..."
                value={filter}
                onChange={handleFilterChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableWithFilter;
