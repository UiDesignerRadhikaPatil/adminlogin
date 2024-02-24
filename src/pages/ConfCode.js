import React from 'react'
import { LuPencilLine } from "react-icons/lu";
import '../static/css/confcode.css'
const ConfCode = () => {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src='https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2020/06/TaxDome.5ee777e5b0721.png' alt='' />
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
            <div className='confirm-code'>
                <h2>Confirmation Code</h2>
                <p>We sent a confirmation code to your email:</p>
                <b>nag.vn101@gmail.com <LuPencilLine className='icon' /> </b>
                <p className='text'>Please, enter it below</p>
                <br/>
                <div className='code'>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <p className='resend'>Didn't receive it? <a href='#'><b>Resend code</b></a></p>
            </div>
        </>
    )
}

export default ConfCode