import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './Category';
import Product from './Product';

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Category />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/product/:id' element={<Product />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index