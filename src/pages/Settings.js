import React from 'react'
import '../static/css/settings.css'
import logo from '../static/image/logo.png'
const Settings = () => {
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
            <div className='setting-container'>
                <div className='firm-setting'>
                    <div className='firm'>
                        <h2>Firm Settings</h2>
                      
                        <div className='firm-info'>
                            <p>A powerful,integrated platform <br /> to manage teams,clients,projects.</p>
                            <p><b>from $50/mo per user</b> <br />
                                (with a 3-year subscription plan)</p>
                        </div>

                        <h4>Firm Settings</h4>
                        <p>choose web URL</p>
                        <p>You will be ale to set up a fully custom domain(without.taxdome.com) later</p>
                        <input
                            type='text'
                            placeholder='.taxdome.com'
                        />
                        <div className='currency-container'>
                            <div className='currency'>
                                <label>You cannot Change it later</label>
                                <br />

                                <select className='select'>
                                    <option>USD</option>
                                    <option>USD</option>
                                    <option>USD</option>
                                    <option>USD</option>
                                    <option>USD</option>

                                </select>
                            </div>
                            <div className='lang'>
                                <label>Default Language</label>
                                <br />
                                <select className='select'>
                                    <option>English(US)</option>
                                    <option>English(US)</option>
                                    <option>English(US)</option>
                                    <option>English(US)</option>
                                    <option>English(US)</option>
                                </select>
                            </div>
                        </div>

                        <button className='button'>Coutinue</button>
                    </div>
                </div>
                <div className='image'>
                    <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5W-FEzxE6dukyvcV2daqMWYIQn5J6AYfUT9et2JXrm_ERJomS' alt='' />
                </div>
            </div>
        </>
    )
}

export default Settings