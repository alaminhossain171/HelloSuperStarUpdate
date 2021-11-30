import React, { useState,useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import $ from 'jquery'
import HelloSuperStarDemo from "./HelloSuperStarDemo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import '../CSS/Login-page/logIn.css';
import '../CSS/Otp-page/OtpPage.css';
import axios from 'axios';
import swal from 'sweetalert';

const Otp = () => {
    $(".inputs").keyup(function () {
        if (this.value.length === this.maxLength) {
          $(this).next('.inputs').focus();
        }
    });


    const history = useHistory();

    const [loginInput, setLogin] = useState({
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: '',
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            otp: loginInput.otp1 + loginInput.otp2 + loginInput.otp3 + loginInput.otp4 + loginInput.otp5 + loginInput.otp6
        }

    let otp = data.otp;

       

        if(otp.length === 6)
        {
            axios.post(`/api/otp_verify`, data).then(res => {
                if(res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        history.push('/');
                    }
                    else if(res.data.status === 401)
                    {
                        swal("Warning",res.data.message,"warning");
                    }
                    else{
                        setLogin({ ...loginInput,error_list: res.data.validation_errors });
                    }
            });
        }
        else{
            console.log("less");
            swal("Warning","Enter 6 digit OTP first","warning");
        }
            
       
        
    }


    // otp countdown start
    const [counter, setCounter] =useState(60);
  useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);
// function handleResend(){

//     alert('resend data')
// }

    return (
        <>
            <div className="bg-img">
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                        <div className="mt-3">
                                            <HelloSuperStarDemo />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 order-2 order-lg-2 header-img">
                                        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                                            <div className="w-100 otp-body" style={{ maxWidth: "480px" }}>
                                                <Card className='logIn-bg '>
                                                    <Card.Body >

                                                        <div className="d-flex justify-content-center parent-border">
                                                            <h5 className="text-center mb-4 logIn-header">OTP Verification</h5>
                                                        </div>
                                                        <div className="otp">
                                                            <FontAwesomeIcon className="ino mb-2" icon={faEnvelopeOpenText} />
                                                            <p>We have sent an OTP number to your phone. Enter the OTP below to verify your identity</p>
                                                            <b>Time left {counter}s</b> <br />

                                                            
                                                            <div className="otpS align-items-center justify-content-center">
                                                                <input type="text" className="inputs" name="otp1"  maxLength="1" onChange={handleInput} value={loginInput.otp1}/>
                                                                <input type="text" className="inputs" name="otp2"  maxLength="1" onChange={handleInput} value={loginInput.otp2}/>
                                                                <input type="text" className="inputs" name="otp3" maxLength="1" onChange={handleInput} value={loginInput.otp3}/>
                                                                <input type="text" className="inputs" name="otp4" maxLength="1" onChange={handleInput} value={loginInput.otp4}/>
                                                                <input type="text" className="inputs" name="otp5" maxLength="1" onChange={handleInput} value={loginInput.otp5}/>
                                                                <input type="text" className="inputs" name="otp6" maxLength="1" onChange={handleInput} value={loginInput.otp6}/>
                                                            </div>

                                                            <div className="btnO col-lg-12 align-items-center justify-content-center">
                                                                <div className="btnS col-sm-6">
                                                                    <Link to="/accountCreate" > <button>Verify</button></Link>
                                                                </div>
                                                                <div className="btnA col-sm-6 mt-2">
                                                                    
                                                                   {counter===0?   <button className='resend-btn'>Resend</button>:null}
                                                                 
                                                                </div>
                                                            </div>
                                                            

                                                        </div>
                                                        <h6 className="log-otp">Already have an account ? <Link to="/accountcreate">Log In</Link></h6>

                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Otp;


