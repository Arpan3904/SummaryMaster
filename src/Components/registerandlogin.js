import React, { useState, useEffect } from "react";
import "../Components/styles/styles.css"; // Assuming you have a CSS file for
import { auth, provider } from "./config";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import GoogleLogo from "./images/search.png";

const DoubleSliderSignInUpForm = () => {
  const [login, setLogin] = useState(true); // Set to true to make Sign In active by default

  const history = useNavigate();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          // Change the tab to SignIn
          toast.success("successfully getted");
          setLogin(true);
        })
        .catch((err) => {
          toast(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("./home");
        })
        .catch((err) => {
          toast.error(err.code);
        });
    }
  };

  const handleReset = () => {
    navigate("/reset");
  };
  const handleSignUpClick = () => {
    const container = document.getElementById("containerl");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("containerl");
    container.classList.remove("right-panel-active");
  };

  return (
    <div className="overall">
      <center>
        <div className="containerl" id="containerl">
          <div className="form-container sign-up-container">
            <form className="formclass" onSubmit={(e) => handleSubmit(e, "signup")}>
              <h1 className="h1class" style={{color:"white"}}>Create Account</h1>
              <div className="social-container">
                {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a> */}
                <a  onClick={handleGoogleSignIn} className="social aclass" >
                  <img
                    src={GoogleLogo} // Use the imported Google logo
                    alt="Google Logo"
                    className="google-logo"
                    style={{height:"5vh"}}
                  />
                </a>
                {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
              <span className="spanclass" style={{color:"white"}}>or use your email for registration</span>
              <input className="inputclass" style={{borderRadius:"7px"}} name="email" placeholder="Email" />
              <input className="inputclass" style={{borderRadius:"7px"}} name="password" type="text" placeholder="Password" />
              <br/>
              <button className="buttonl">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="formclass" onSubmit={(e) => handleSubmit(e, "SignIn")}>
              <h1 className="h1class"style={{color:"white"}}>Sign in</h1>
              <div className="social-container">
                {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a> */}
                <a onClick={handleGoogleSignIn} className="social ,aclass">
                  <img
                    src={GoogleLogo} // Use the imported Google logo
                    alt="Google Logo"
                    className="google-logo"
                    style={{height:"5vh" }}
                  />
                </a>
                {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
              <span  className="spanclass" style={{color:"white"}}>or use your account</span>
              <input className="inputclass" style={{borderRadius:"7px"}} name="email" placeholder="Email" />
              <input className="inputclass" style={{borderRadius:"7px"}} name="password" type="text" placeholder="Password" />
              <a onClick={handleReset} style={{color:"white"}} className="aclass">Forgot Password?</a>
              <button className="buttonl">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1class">Welcome Back!</h1>
                <p className="pclass">
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1class">Hello, Friend!</h1>
                <p className="pclass">Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default DoubleSliderSignInUpForm;
