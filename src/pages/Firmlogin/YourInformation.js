import React from 'react'
import logo from 'C:/PMS/snp_tax/src/static/image/logo.png';
import { Navigation, useNavigate } from 'react-router-dom';

function YourInformation() {

    const navigate = useNavigate();

    const nextpage = () =>{
        navigate('/firminformation');
    };

    const PreviousPage =()=>{
        navigate('/confirmationcode');
    }
    return (
        <>
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='' />
                <b>Microtech Solutions</b>
            </div>
            <div className='path'>
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

        <div className='information'>
            <h2>Your Information</h2>
            <form className='info-form'>
                <div className='name'>
                    <div> <label>First Name</label>
                    <br/>
                    <input
                    className="fname"
                    placeholder='First name' 
                    /></div>
                   
                 <div><label>Last Name</label>
                    <br/>
                    <input
                    className="lname"
                    placeholder='Last name' 
                    /></div>
                    
                </div>
                <br/>
                <label className="contact">Contact Number:</label>
                <br/>
               
                 <select id="countryCode" name="countryCode">
                <option value="+1">+1 </option>
                <option value="+44">+44 </option>
                 
                </select>

              
                <input
                 type="tel"
                  id="contactNumber"
                 name="contactNumber"
                 placeholder="Enter your contact number"
                 />
            </form>
        </div>
        <br />
    <button onClick={nextpage} className="next">Next</button>
    <button onClick={PreviousPage} className="pre">Previous</button>
    </>
);
}

export default YourInformation
