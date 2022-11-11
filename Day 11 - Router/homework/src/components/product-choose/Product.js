import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate();
    // const params = useParams(); // method 1
    // console.log(params.id); // method 1
    // method 2
    const { state } = useLocation();
    console.log(state);
    return (
        <div className='container pt-3'>
            <p>The category ID: {state.categoryID}</p>
            <button className='btn btn-info' onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default Product