import React from 'react'
import { useLocation } from 'react-router-dom';

const EmployeeDetails = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div>Employee Details:</div>
    )
}

export default EmployeeDetails;