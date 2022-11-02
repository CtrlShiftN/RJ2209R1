import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const loginSchema = Yup.object().shape({
        username: Yup.string().email().required(),
        password: Yup.string().min(4).required()
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div className='container pt-3'>
            <div className="login-form">
                <div class="card my-2 shadow">
                    <div class="card-body">
                        <Formik
                            initialValues={form}
                            enableReinitialize={true}
                            validationSchema={loginSchema}
                            onSubmit={(values) => {
                                if (values.username === 'admin@gmail.com' && values.password === 'letmein') {
                                    // navigate('/home', { state: form });
                                    alert("Login success!");
                                    navigate('/employee', { state: form });
                                } else {
                                    alert("Invalid username or password");
                                    setForm({ username: '', password: '' })
                                }
                            }}
                        >
                            <Form>
                                <h2 className='text-center text-uppercase'>Login</h2>
                                <p className='mb-0 mt-2'>Username: </p>
                                <Field name="username" placeholder="Enter your username" value={form.username || ""} onChange={handleChange}></Field>
                                <ErrorMessage component="div" className='text-danger' name='username'></ErrorMessage>
                                <p className='mb-0 mt-2'>Password</p>
                                <Field name="password" type="password" placeholder="Enter your password" value={form.password || ""} onChange={handleChange}></Field>
                                <ErrorMessage component="div" className='text-danger' name='password'></ErrorMessage>
                                <br />
                                <div className='text-center'>
                                    <button type='submit' className='mt-2 btn btn-success'>Login</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login