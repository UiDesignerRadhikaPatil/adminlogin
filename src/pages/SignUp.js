import React, { useState, useRef, useEffect } from "react";
import logo from '../static/image/logo.png';
import '../static/css/signup.css';
import '../static/css/confirmation.css';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { AiFillEdit } from "react-icons/ai";


import firmsetting from 'C:/PMS/snp_tax/src/static/image/firm setting.png';
import { IoIosArrowDropup } from "react-icons/io";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import '../static/css/form.css';


const SignUp = () => {


    ///Next Buton ====================================================================
    const [currentStep, setCurrentStep] = useState(2);
    const navigate = useNavigate();


    const LoginButton = () => {
        navigate('/adminlogin');
    };

    //=============================================================================================
    //todo send email for varification validation 0099
    const [inpval, setInpval] = useState({
        email: "",
        termsCheckbox: "",
    });

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value

            }
        })
    };


    const addUserdata = async (e) => {
        e.preventDefault();

        const { email, termsCheckbox } = inpval;
        if (email === "") {
            alert("email is required!", {
                position: "top-center"
            });

        } else if (!email.includes("@")) {
            alert("includes @ in your email!", {
                position: "top-center"
            });
        } else if (termsCheckbox === "true") {
            alert("termsCheckbox is required!", {
                position: "top-center"
            });
        } else if (!termsCheckbox === "false") {
            alert("termsCheckbox is required!", {
                position: "top-center"
            });
        }
        else {


            //API ADD?
            alert("Successfully Done", {
                position: "top-center"
            })


            nextStep();

        }
    }

    //=============================================================================================================================================





    // @ 2nd Page Validation ==========================================

    const [otp, setOtp] = useState('');
    const [incodeemail, setcode] = useState({

        emailcode: ""
    });

    const setcodeemail = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;


        setcode(() => {
            return {
                ...inpval,
                [name]: value

            }
        })
    };

    const emailcodersender = async (e) => {
        e.preventDefault();

        const { emailcode } = inpval;
        if (emailcode === "") {
            alert("Its required  ", {
                position: "top-center"
            });

        }
        else {


            //API ADD?
            alert("Successfully Done", {
                position: "top-center"
            })


            nextStep();

        }
    }

    // !dont use this function for post 
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("form")

    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };



    //================================================================================================================================
    // sign up page//
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');

    //  =====================================================================



    // ===================================================================================================================================


    // Confirmation Code //
    const [confirmationCode, setConfirmationCode] = useState('');
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];


    // edit Email //

    const [editEmail, setEditEmail] = useState(false);
    const [newEmail, setNewEmail] = useState('admin123@gmail.com');
    const [validEmail, setValidEmail] = useState('');
    const [confirmationCodeSent, setConfirmationCodeSent] = useState(false);


    //======================================================================================================================

    const handleEditEmail = () => {
        setEditEmail(true);
    };

    const handleChangeEmail = (e) => {
        const email = e.target.value;
        setNewEmail(email);
        setValidEmail(email !== '');
    };


    const handleSaveEmail = () => {
        if (validEmail) {
            setEditEmail(false);
        }
        console.log('New email address:', newEmail);
        setEditEmail(false);

    };

    const resendConfirmationCode = (email) => {
        // Make a request to resend confirmation code
        // Replace 'your-backend-endpoint' with the actual backend endpoint
        return axios.post('your-backend-endpoint', { email });
    };

    const handleResendCode = () => {
        resendConfirmationCode(newEmail)

            .then(() => {
                setConfirmationCodeSent(true);
            })
            .catch((error) => {
                console.error('Error resending code:', error);

            })
    }

    const handleCancelEdit = () => {
        // Cancel the email edit
        setEditEmail(false);
    };


    const handleConfirmationCodeChange = (e, index) => {
        const value = e.target.value;
        const newCode = confirmationCode.slice(0, index) + value + confirmationCode.slice(index + 1);
        setConfirmationCode(newCode);

        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    // todo Your Information Page //
    ///Page 3 MAping 

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState("");
    const [code, setCode] = useState();
    const [mobile, setMobile] = useState()

    //  Phone Number //
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        console.log(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phoneNumber);
    };
    // todo ===================================================

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);

    useEffect(() => {
        const getCountryData = async () => {
            try {
                const response = await axios.get("https://countriesnow.space/api/v0.1/countries/positions");
                setCountries(response.data.data);
                console.log("Country Data Fetched Successfully");
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };

        getCountryData();
    }, []);

    useEffect(() => {
        const getStatesData = async () => {
            try {
                const response = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
                setStates(response.data.data);
                console.log("State Data Fetched Successfully");
            } catch (error) {
                console.error("Error fetching state data:", error);
            }
        };

        getStatesData();
    }, []);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };



    //todo======================================================================================================================== 

    //    firm Informaton Page

    const [firm_name, setFirmName] = useState('');

    // todo Services your Firm offre ==============================================================================================

    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const handleButtonClick = (buttonName) => {
        const index = selectedButtons.indexOf(buttonName);
        if (index === -1) {
            setSelectedButtons([...selectedButtons, buttonName]);
        } else {
            setSelectedButtons(selectedButtons.filter(name => name !== buttonName));
        }
    };

    const handleSelectAllChange = () => {
        setSelectAllChecked(!selectAllChecked);
        if (!selectAllChecked) {
            const allButtonNames = [
                'TaxPreparation', 'planning', 'Advisory', 'Resolution', 'Payroll',
                'Accounting', 'Audit', 'Lawfirm', 'Bookkeeping', 'Other'
            ];
            setSelectedButtons(allButtonNames);
        } else {
            setSelectedButtons([]);
        }
    };



    //todo====================================================================================================================================


    //todo setting Firm page//

    const [currency, setCurrency] = useState('');
    const [language, setLanguage] = useState('');
    const [url, setUrl] = useState('');
    const label=".pms.com";



    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmitUrl = (e) => {
        const combinedValue = url + label;
        console.log("Combined value:", combinedValue); 
    };

    console.log(currency);
    console.log(language);
    console.log(handleSubmitUrl);

    const handleCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        setCurrency(selectedCurrency);
        console.log("Selected currency:", selectedCurrency);
      };
      
      const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        console.log("Selected language:", selectedLanguage);
      };

      const handleSendData = () => {
        const combinedData = {
          url: handleSubmitUrl,
          currency: currency,
          language: language
        };
        console.log("Combined data:", combinedData);
        console.log(url);
        // You can send combinedData to backend here
      };
    // todo============================================================================================================================

    // Date Picker ====================================================================================================================

    const [selectedDate, setSelectedDate] = useState(null);


    const renderFormFields = () => {
        switch (currentStep) {

            //sign up
            case 1:
                return (
                    <>
                        <div>
                            <div className='header'>
                                <div className='logo'>
                                    <img src={logo} alt='' />
                                    <b>Microtech Solutions</b>
                                </div>
                                <div className='header-info'>
                                    <button className='login-btn' onClick={LoginButton} >Login</button>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU' alt='' />
                                    <h3>EN</h3>
                                </div>
                            </div>

                            <div className="abc">
                                <div className="sign-up-form">
                                    <h2>Sign Up</h2>
                                    <p className='subtitle'>Sign up your firm and start upgrading your workflow</p>
                                    <br />
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                                        </div>
                                        <div className="checkbox-container">

                                            <label>
                                                <input type="checkbox" onChange={setVal} value={inpval.termscheckbox} name="termscheckbox" id="termscheckbox" />

                                            </label>
                                            <label htmlFor="termsCheckbox">
                                                I agree to the terms and conditions
                                                {/* <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>. */}
                                            </label>
                                        </div>
                                        <br />

                                        <button onClick={addUserdata} >Create Account</button>
                                        <br />

                                        <p className="sign-in-link">
                                            Already have an account? <a href="#">Sign in</a>
                                        </p>
                                    </form>
                                </div>
                                <br />
                                <button onClick={nextStep} className="next" >Next</button>

                            </div>


                        </div>

                    </>
                );




            //code confirmation
            case 2:
                return (
                    <div>
                        <div className='header'>
                            <div className='logo'>
                                <img src={logo} alt='' />
                                <b>Microtech Solutions</b>
                            </div>
                            <div className='header-info'>
                                <button className='login-btn' onClick={LoginButton} >Login</button>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU' alt='' />
                                <h3>EN</h3>
                            </div>
                        </div>
                        {currentStep === 2 && (
                            <div className='confirm-code'>
                                <h2>Confirmation Code</h2>
                                <p>We sent a confirmation code to your email:
                                </p>
                                <div className="email-edit-container" >
                                    <b>
                                        {editEmail ? (
                                            <>
                                                <input type="email" value={newEmail} onChange={handleChangeEmail} />
                                                <div className="button-group">
                                                    <button onClick={handleSaveEmail} className="save-button">Save</button>
                                                    <button onClick={handleCancelEdit} className="cancel-button">Cancel</button>
                                                </div>
                                                {!validEmail && (
                                                    <p className="error-message">Please enter a valid email address.</p>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {newEmail} <span onClick={handleEditEmail} className="edit-icon"><AiFillEdit /></span>
                                            </>
                                        )}
                                    </b>
                                    {confirmationCodeSent && (
                                        <button onClick={handleResendCode} className="resend-code-button">Resend Code</button>
                                    )}
                                </div>
                                <p className='text'>Please, enter it below</p>
                                <br />
                                <div className='code'>
                                    {[...Array(6)].map((_, index) => (
                                        <input
                                            key={index}
                                            type="text"

                                            className='box'
                                            maxLength="1"
                                            onChange={(e) => handleConfirmationCodeChange(e, index)}
                                            ref={inputRefs[index]} // Ensure that each input element has a ref assigned
                                        />

                                        // <input  ref={inputRefs[index]} maxLength="1" key={index} type="number" onChange={setcodeemail} value={incodeemail.emailcode} name="emailcode" id="emailcode" />



                                    ))}
                                </div>
                                <p className='resend'>Didn't receive it? <a href='#'><b>Resend code</b></a></p>
                                <p className='confirm-code-display'>{confirmationCode}</p> {/* Display the OTP below input boxes */}
                            </div>
                        )}
                        <br />

                        <button onClick={emailcodersender} className="next">Next</button>


                    </div>



                );
            //information
            case 3:
                return (
                    <>
                        <div id="phase-3" className='header'>
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
                                <button className='login-btn' onClick={LoginButton}>Login</button>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU' alt='' />
                                <h3>EN</h3>
                            </div>
                        </div>

                        <div className='information'>
                            <h2>Your Information</h2>
                            <form className='info-form'>
                                <div className='name'>
                                    <div> <label>First Name</label>
                                        <br />
                                        <input required
                                            className="fname"
                                            placeholder='First name'
                                            value={firstname}
                                            onChange={e => setFirstname(e.target.value)}

                                        /></div>

                                    <div>
                                        <label>
                                            Last Name

                                        </label>
                                        <br />
                                        <div>
                                            <input required
                                                className="lname"
                                                placeholder='Last name'
                                                value={lastname}
                                                onChange={e => setLastName(e.target.value)}

                                            />
                                        </div>
                                    </div>

                                </div>
                                <br />
                                <div>
                                    <label>
                                        Contaact  Number:
                                        <PhoneInput
                                            country={'in'}
                                            value={phoneNumber}
                                            onChange={handleChange}
                                            inputProps={{
                                                required: true,
                                            }}
                                        />
                                    </label>
                                    {!valid && (
                                        <p>Please enter a valid phone number.</p>
                                    )}
                                </div>
                            </form>

                        </div>
                        <br />
                        <button onClick={nextStep} className="next" >Next</button>
                        <button onClick={prevStep} className="pre">Previous</button>
                    </>
                );

            case 4:
                return (
                    <>
                        <div className='header' id="phase-4">
                            <div className='logo'>
                                <img alt='' />
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
                                <button className='login-btn' >Login</button>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU' alt='' />
                                <h3>EN</h3>
                            </div>
                        </div>

                        <div className='information'>
                            <h2>Firm Information</h2>
                            <form className='info-form'>
                                <label className="firm-name" >Firm Name</label>
                                <br />
                                <input className="input" type="text" placeholder="Enter firm name" />
                                <br />
                                <br />

                                <div className="col-12 col-sm-4">
                                    <div className="form-group">
                                        <select
                                            className="form-select"
                                            aria-label="Select Country"
                                            onChange={handleCountryChange}
                                            value={selectedCountry}
                                        >
                                            <option value="">Choose Country</option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country.name}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                    <div className="form-group">
                                        <select
                                            className="form-select"
                                            aria-label="Select State"
                                            onChange={(e) => console.log(e.target.value)}
                                        >
                                            <option value="">Choose State</option>
                                            {states
                                                .filter((country) => country.name === selectedCountry)
                                                .map((country) =>
                                                    country.states.map((state, index) => (
                                                        <option key={index} value={state.state_code}>
                                                            {state.name}
                                                        </option>
                                                    ))
                                                )}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br />
                        <button onClick={nextStep} className="next">Next</button>
                        <button onClick={prevStep} className="pre">Previous</button>
                    </>
                );


            case 5:
                return (
                    <>
                        <div className='header' id="5">
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
                                <button className='login-btn' onClick={LoginButton}>Login</button>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU' alt='' />
                                <h3>EN</h3>
                            </div>
                        </div>

                        <div className='information'>
                            <h2>Services your firm offers </h2>
                            <div className="offers">

                                <p >Tax Prepration</p>
                                <p>Tax Planning</p>
                                <p>Advisory</p>
                                <p>Resolution</p>
                                <p>Payroll</p>
                                <p>Accounting</p>
                                <p>Audit</p>
                            </div>
                            <div className="offers">
                                <p >Law firm</p>
                                <p>Bookkeeping</p>
                                <p>Other</p>
                            </div>
                            <input type="checkbox" id="offer" className="checkbox" />
                            <label for="select">Select all</label>
                        </div>
                        <br />

                        <div className="buttons">


                            <button onClick={nextStep} className="next">Next</button>
                            <button onClick={prevStep} className="pre">Previous</button>

                        </div>

                    </>
                );

            case 6:
                return (
                    <>
                        <div className='header'>
                            <div className='logo'>
                                <img src={logo} alt='' />
                                <b>PMS Solutions</b>
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
                                <button className='login-btn' onClick={LoginButton}>Login</button>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU' alt='' />
                                <h3>EN</h3>
                            </div>
                        </div>

                        <div className='firm-information'>
                            <h2>Your role in the firm  </h2>
                            <div className="offers">
                                <p>Owner or Partner</p>
                                <p>Bookkeeper or Accountant</p>
                                <p>Operations/Office Manager</p>
                                <p>Admin</p>
                                <p>Assistant</p>
                                <p>Other</p>

                            </div>

                        </div>

                        <br />
                        <div className="buttons">

                            <button onClick={nextStep} className="next">Next</button>
                            <button onClick={prevStep} className="pre">Previous</button>

                        </div>
                    </>
                )

            //settings
            case 7:
                return (
                    <>
                        <div className='header'>
                            <div className='logo'>
                                <img src={logo} alt='' />
                                <b>Microtech Solutions</b>
                            </div>
                            <div className='setting-path'>
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
                                <button className='login-btn' onClick={LoginButton}>Login</button>
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

                                    <h3>Firm Setting</h3>

                                    <p>choose web URL</p>
                                    <p>You will be ale to set up a fully custom domain(without.pms.com) later</p>

                                    <div className="url_container">
                                        <input
                                            type="text"
                                            id="url_input"
                                            value={url}
                                            onChange={handleUrlChange}
                                            className="url"
                                            placeholder="Enter your URL"
                                        />
                                        <label className="label" id="domin_lable">{label}</label>
                                    </div>


                                    <div className='currency-container'>
                                        <div className='currency'>
                                            <label>You cannot Change it later</label>
                                            <br />

                                            <select className='select' value={currency} onChange={e => setCurrency(e.target.value)}>
                                                <option>USD</option>
                                                <option>AUD</option>
                                                <option>Euro</option>
                                                <option>NZD</option>
                                                <option>CAD</option>
                                                <option>GBP</option>
                                                <option>CHF</option>
                                                <option>BRL</option>
                                                <option>SEK</option>
                                                <option>NOK</option>
                                                <option>DKK</option>
                                                <option>JPY</option>


                                            </select>
                                        </div>
                                        <div className='lang'>
                                            <label>Default Language</label>
                                            <br />
                                            <select className='select' value={language} onChange={e => setLanguage(e.target.value)}>
                                                <option>English(British)</option>
                                                <option>Deutsch</option>
                                                <option>Ztaliano</option>
                                                <option>Nederlands</option>
                                                <option>suomi</option>
                                                <option>Dansk</option>
                                                <option>Sevenska</option>
                                                <option>Norsk</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className='button' onClick={handleSendData}>Continue</button>
                                </div>
                            </div>
                            <div className='image'>
                                <img src={firmsetting} alt='' />
                            </div>
                        </div>
                        <br />
                        <button onClick={nextStep} className="next">Next</button>
                        <button onClick={prevStep} className="pre">Previous</button>
                    </>
                );


                case 8:
                    // return (
                    //     <div>
                    //       <DatePicker
                    //         selected={selectedDate}
                    //         onChange={(date) => setSelectedDate(date)}
                    //         dateFormat="dd-MM-yyyy"
                    //       />
                    //     </div>
                    //   );
            //book session


            default:
                return null;
        }
    };

    return <form onSubmit={handleSubmit}>{renderFormFields()}</form>;
};

export default SignUp;






























