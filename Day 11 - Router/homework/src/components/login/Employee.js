import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Employee = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ];
    const handleClick = (index) => {
        navigate('/employee-details', { state: employees[index] });
    }
    return (
        <div className='container pt-3'>
            <p>Your account: {state.username}</p>
            <h3>Employee List:</h3>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => handleClick(index)}>Details</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Employee;