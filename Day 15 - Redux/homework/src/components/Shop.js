import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getAllProduct } from '../redux/actions';

const Shop = () => {
    const dispatch = useDispatch();
    // const [productList, setProductList] = useState([]);
    const store = useSelector(state => state.myReducer)
    const cart = store.cart;
    const productList = store.productList;


    useEffect(() => {
        dispatch(getAllProduct());
    }, [])


    const handleClick = (productDetail) => {
        dispatch(addToCart(productDetail));
    }

    return (
        <div className='container pt-3'>
            <h2>Product List</h2>
            <table className='table table-hover table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Inventory</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.inventory}</td>
                            <td>
                                <button className='btn btn-warning' onClick={() => handleClick(item)}>Add to cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <h2>Cart</h2>
            <table className='table table-hover table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Inventory</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.inventory}</td>
                            <td>{item.count ? item.count : 0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Shop;