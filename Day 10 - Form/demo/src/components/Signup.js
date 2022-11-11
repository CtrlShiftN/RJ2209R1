import { useState } from "react"
import { Input } from "./Input";

export const Signup = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "", repassword: "" });
    const [error, setError] = useState({ username: null, email: null, password: null, repassword: null });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    return (
        <div className="container pt-3">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Username" type="text" error={error.username ? error.username : ""} name="username" onChange={handleChange}></Input>
                <Input label="Email" type="email" name="email" onChange={handleChange}></Input>
                <Input label="Password" type="password" name="password" onChange={handleChange}></Input>
                <Input label="Confirm password" type="password" name="repassword" onChange={handleChange}></Input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}