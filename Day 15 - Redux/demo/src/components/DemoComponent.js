import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../redux/actions';

const DemoComponent = () => {
    const { count } = useSelector(state => state.initChange);
    const dispatch = useDispatch();

    const decreasement = () => {
        dispatch(decrease());
    }

    const increasement = () => {
        dispatch(increase());
    }

    console.log(count);
    return (
        <div className='container pt-3 text-center'>
            <button className='btn btn-info me-3' onClick={decreasement}> Decrease (-) </button>
            {count}
            <button className='btn btn-info ms-3' onClick={increasement}> Increase (+) </button>
        </div>
    )
}

export default DemoComponent;