import React from 'react';
import logo from 'C:/PMS/snp_tax/src/static/image/logo.png';
import { Navigation, useNavigate } from 'react-router-dom';

function FirmInformation  ()  {
    const navigate = useNavigate();

    const nextpage = () => {
        navigate('/servicesyourfirmoffer');
    };
    const previouspage = () => {
        navigate('/yourinformation')
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
            <h2>Firm Information</h2>
            <form className='info-form'>
                <label className="firm-name" >Firm Name</label>
                <br/>
                <input className="input" type="text" placeholder="Enter firm name"/>
                <br/>
                <br/>
                <label className="country" >Country</label>
                <p>Please make sure the country you've chosen is correct. You cannot Change it later</p>
               <select className="select-country">
                <option>USA</option>
                <option></option>
                <option></option>
               </select>
               <br/>
               <label className="state">state</label>
               <br/>
               <select className="select-country">
                <option>USA</option>
                <option></option>
                <option></option>
               </select>
            </form>
        </div>
        <br />
    <button onClick={nextpage} className="next">Next</button>
    <button onClick={previouspage} className="pre">Previous</button>
    </>
);
 
}

export default FirmInformation
