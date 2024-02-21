import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from './config';
import { useNavigate } from "react-router-dom";
import "./styles/styles.css"


function ForgotPassword() {
    const navigate = useNavigate(); // Move useNavigate hook outside the handleSubmit function

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        sendPasswordResetEmail(auth, emailVal)
            .then(() => {
                alert("Check your email");
                navigate("/login"); // Use navigate directly
            })
            .catch((err) => {
                alert(err.code);
            });
    }

    return (
        <center>
        <div style={{marginTop:"40vh",width:"50vw"}}>
            
            <form onSubmit={(e) => handleSubmit(e)}>
            <strong style={{color:"white",marginTop:"3vh",fontSize:"30px"}}>Reset Password</strong>
                <br />
                <input name="email"  placeholder="Enter Your Email here."/><br/>     
                <button className="buttonl" type="submit" style={{margin:"2vh"}}>Reset</button>
            </form>
        </div>
        </center>
    )
}

export default ForgotPassword;
