import React from 'react'
import '../static/css/information.css'
import logo from '../static/image/logo.png'
const Information = () => {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt='' />
                    <b>Microtech Solutions</b>
                </div>
                <div className='path'>
                    <p className='number'>1</p>
                    <p>Email</p>
                    <p className='number'>2</p>
                    <p>Information</p>
                    <p className='number'>3</p>
                    <p>Settings</p>
                    <p className='number'>4</p>
                    <p>Book a session</p>
                </div>
                <div className='header-info'>
                    <button className='login-btn'>Login</button>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU' alt='' />
                    <h3>EN</h3>
                </div>
            </div>

            <div className='information'>
                <h2>Your Information</h2>
                <form className='info-form'>
                    <div className='name'>
                        <label>First Name</label>
                        <input
                        placeholder='First name' 
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Information