import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className='container pt-3'>Your account: {state.username}</div>
    )
}

export default Home