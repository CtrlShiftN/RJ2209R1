import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Employee from './Employee'
import EmployeeDetails from './EmployeeDetails'
import Home from './Home'
import Login from './Login'

const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/employee-details' element={<EmployeeDetails />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Index