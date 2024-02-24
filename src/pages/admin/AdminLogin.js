import React, { useState } from "react";
import axios from "axios";
// import logo from "./static/logoAdmin.png";
// import "C:/PMS/snp_tax/src/static/css/adminlogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { FaInstagram, } from "react-icons/fa";
import 'C:/PMS/snp_tax/src/static/css/common.css';

import Select from "react-select";
// import GooglePlayStore from "./static/GooglePlayStore.svg";
// import AppStore from "./static/AppStore.png";

import { useNavigate } from "react-router-dom";

import { FaFacebook, FaWeebly, FaInstagramSquare, FaLinkedin, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";

import InputField from "./InputField";
import Buttoncomponent from "./Buttoncomponent";
import Selectdropdown from "./Selectdropdown";


export default function SuperAdminLogin() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const options = [
        { value: "30 minutes", label: "30 minutes" },
        { value: "4 hours", label: "4 hours" },
        { value: "8 hours", label: "8 hours" },
    ];

    const setValbox = (event) => {
        setIsChecked(event.target.checked);
        console.log(event.target.checked);
    };

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value,
            };
        });
    };

    const loginuser = async (e) => {
        e.preventDefault();

        const { email, password, terms } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center",
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center",
            });
        } else if (isChecked === false) {
            toast.error("Accept terms and condtion ", {
                position: "top-center",
            });
        } else {
            e.preventDefault();
            const data = JSON.stringify({
                // email: inpval.email,
                // password: inpval.password,
                email: "vinayak@gmail.com",
                password: "Vinayak@1234",
            });

            const config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://127.0.0.1:8000/admin/login",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            axios

                .request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    alert("You are logged in!");

                    // navigate("/superAdminDashboard");
                    toast.success("You are sucessfully loged in", { position: "top-right" });

                    setInpval({ ...inpval, email: "", password: "" });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className='login-container col-12' style={{ background: 'pink', display: 'flex', minHeight: '100vh', }}>
            <div className="left-container col-12 col-md-6" style={{ background: 'rgb(58,145,245)', color: 'black', padding: '20px' }}>
                <div className="col-12" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '35px' }}>Welcome Back Admin</h2>
                </div>
                <div className="col-12" style={{ textAlign: 'center', marginBottom: '20px', paddingLeft: '120px', paddingRight: '120px' }}>
                    <p style={{ fontSize: '20px' }}>Our tax consultancy services offer expert guidance on navigating complex tax landscapes. From personalized tax planning to compliance assistance, we ensure your financial strategies align with current regulations. Trust us to maximize your deductions, minimize liabilities, and provide clarity in the ever-evolving tax environment. Your financial success is our priority.</p>
                </div>
                <div className="col-12" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <p style={{ fontSize: '22px', fontWeight: '300' }}>"Please log in to access your account."</p>
                </div>
                <div className="col-12" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col-2 col-md-1" style={{ textAlign: 'center', color: 'white', fontSize: '36px', height: '50px', width: '50px', margin: '0 ' }}><FaFacebook /></div>
                    <div className="col-2 col-md-1" style={{ textAlign: 'center', color: 'white', fontSize: '36px', height: '50px', width: '50px', margin: '0 ' }}><FaTwitter /></div>
                    <div className="col-2 col-md-1" style={{ textAlign: 'center', color: 'white', fontSize: '36px', height: '50px', width: '50px', margin: '0 ' }}><FaInstagram /></div>
                    <div className="col-2 col-md-1" style={{ textAlign: 'center', color: 'white', fontSize: '36px', height: '50px', width: '50px', margin: '0 ' }}><FaLinkedin /></div>
                    <div className="col-2 col-md-1" style={{ textAlign: 'center', color: 'white', fontSize: '36px', height: '50px', width: '50px', margin: '0 ' }}><FaWeebly /></div>
                </div>
            </div>


            <div className="right-container col-12" style={{ background: '#f0f0f0', color: 'black', }}>
                <div className="col-6" style={{ textAlign: 'center', minHeight: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="col-12" style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '25px', textAlign: 'left', }}>Account Login</h2>
                    </div>
                    <div className="form-group col-12" >
                        <label htmlFor="email">Email</label>
                        <InputField />
                    </div>


                    <div className="form-password col-12" style={{ marginBottom: '10px' }}>
                        <div className="password-input" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <label htmlFor="password">Password</label>
                            <InputField />
                            <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', right: '20px', cursor: 'pointer' }}>
                                {!showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'left', marginBottom: '10px', fontSize: '12px', }}>
                        <NavLink href="#" style={{ color: 'rgb(100, 149, 237)' }}>Forgot Password?</NavLink>
                    </div>


                    <div className="form-password col-12" >
                        <div className="password-input" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="password" >Stay signed in for</label>
                            <Selectdropdown />
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop:'10px' }}>
                        <input type="checkbox" id="terms" style={{ marginRight: '15px' }} />
                        <label htmlFor="terms" style={{ color: '#696969', fontSize: '14px', marginBottom: '0' }}>"Agree to  <a href='"https://policies.google.com/terms?hl=en-US">Terms </NavLink> and <NavLink to="https://policies.google.com/terms?hl=en-US"' style={{ color: 'rgb(58, 145, 245)' }}>Conditions"</a></label>
                    </div>

                    <div className="button-section col-12" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px', textAlign: 'center' }}>
                        <Buttoncomponent />
                    </div>

                    <div style={{ textAlign: 'left', marginTop: '10px', }}>
                        <h5> Don't have a PMS solutions client portal Account ? <NavLink to="/" style={{ color: 'rgb(100, 149, 237)' }}>Sign Up</NavLink></h5>

                    </div>

                    <div className="playstore-section">
                        <div className="storeBtn" style={{ display: "flex", marginLeft: "-10px" }}>
                            <div className="playstore">
                                {/* <NavLink to="https://play.google.com/store/apps/details?id=com.linkedin.android&hl=en_IN&gl=US">
                <img style={{ width: "200px" }} src={GooglePlayStore} alt="Logo" />
              </NavLink> */}
                            </div>
                            <div className="appstore">
                                <div className="storeBtn">
                                    {/* <NavLink to="https://apps.apple.com/us/app/linkedin-network-job-finder/id288429040">
                  <img style={{ width: "150px", marginTop: "-7px" }} src={AppStore} alt="Logo" />
                </NavLink> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}