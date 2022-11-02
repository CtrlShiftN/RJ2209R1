import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    const navigate = useNavigate();
    const handleChange = (e) => {
        let category = e.target.value;
        // navigate(`/product/${category}`); // method 1
        navigate('/product', {state: {categoryID: category}}); // method 2
    }
  return (
    <div className='container pt-3'>
        <h2>Choose a category:</h2>
        <select onChange={handleChange} defaultValue="default">
            <option value="default" disabled hidden>-- Choose --</option>
            <option value={1}>Car</option>
            <option value={2}>Bus</option>
            <option value={3}>Rail</option>
            <option value={4}>Air-plane</option>
        </select>
    </div>
  )
}

export default Category