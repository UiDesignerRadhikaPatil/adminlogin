import React from 'react'
import logo from 'C:/PMS/snp_tax/src/static/image/logo.png';
import { Navigation, useNavigate } from 'react-router-dom';

export default function Confirmationcode() {

    const navigate = useNavigate();

    const nextpage = () => {
        navigate('/yourinformation');
    };
    const previouspage = () => {
        navigate('/signup')
    }

    return (
        <div>
            <>
                <div className='header'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                        <b>Microtech Solutions</b>
                    </div>
                    <div className='conf-path'>
                        <p className='number1'>1</p>
                        <p>Email</p>
                        <p className='number2'>2</p>
                        <p>Information</p>
                        <p className='number3'>3</p>
                        <p>Settings</p>
                        <p className='number4'>4</p>
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
                    <b>nag.vn101@gmail.com </b>
                    <p className='text'>Please, enter it below</p>
                    <br />
                    <div className='code'>
                        <input type="text" className='box' maxLength="1" />
                        <input type="text" className='box' maxLength="1" />
                        <input type="text" className='box' maxLength="1" />
                        <input type="text" className='box' maxLength="1" />
                    </div>
                    <p className='resend'>Didn't receive it? <a href='#'><b>Resend code</b></a></p>
                </div>
                <br />
                <button className="next" onClick={nextpage}>Next</button>
                <button className="pre" onClick={previouspage}>Previous</button>


            </>

        </div>
    )
}


