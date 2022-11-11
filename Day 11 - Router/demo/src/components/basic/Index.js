import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"

export const Index = () => {
    return (
        <div className="container pt-3">
            <BrowserRouter>
                <div className="content-index">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about">About</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                    <hr />
                </div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact/:id" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}