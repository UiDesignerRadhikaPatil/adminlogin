import React, { useState } from 'react';
import '../superAdmin/login.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faCcDiscover, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from 'react-social-icons'
// import Company_logo from 'C:/SNP Project/snp/src/images/Comapny_logo.png';


export default function SuperAdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  setTimeout(() => {
    console.log('Form Submitted', email, password);

    // navigate('/superAdminDashboard');
  }, 2000);


  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="responsive-split-screen-container">

      {/* <img src={Company_logo} alt="Company Logo" className="company-logo" /> */}

      <div className="left-container">
        <h2>Welcome Back Super Admin!</h2>
        <h5>Our practice management software optimizes your professional workflow with features like streamlined appointment scheduling, efficient billing and invoicing, organized client management, secure document handling, and productivity-enhancing tools. Elevate your daily operations with our user-friendly and comprehensive solution.</h5>

        <p>"Please log in to access your account."</p>

        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faWeebly} className="icon" />

        </div>
      </div>
      <div className="right-container">
        <form className="login-form">
          <h2>Login Account</h2>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder='Email' className='' />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder='password' />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};


