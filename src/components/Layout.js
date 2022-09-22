import React from 'react'

const Layout = (props) => {
    return (
        <>
            <div className='header'>
                <div className="col">
                <a href="/" className='logo'>Siddarth</a>

                </div>
                <div className="col">
                {/* <span>Hello</span>
                <a href="/login" className='login'>Login</a> */}

                </div>

            </div>

            <div className='main'>
                {props.children}
            </div>

            <div className='footer'>
                <p> &copy;2022 All rights Reserved . Powered by Siddarth</p>
            </div>



        </>
    )
}

export default Layout