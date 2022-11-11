import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='container pt-3'>
            <p>This is a layout header</p>
            {children}
            <p>This layout footer</p>
        </div>
    )
}

export default Layout