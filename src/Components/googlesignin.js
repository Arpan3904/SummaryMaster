// SignIn.js

import React, { useState, useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; 
import { auth1 } from '../firebase'
import GoogleLogo from './images/download.png'; // Import the Google logo
import {toast} from 'react-toastify';

function SignIn() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      toast.success("User signed up successfully!");
    } catch (error) {
      toast.error("Error signing up:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate('/home');
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []); 

  return (
    <div>
      <button className="google-sign-in" onClick={handleGoogleSignIn}>
        <img
          src={GoogleLogo} // Use the imported Google logo
          alt="Google Logo"
          className="google-logo"
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}

export default SignIn;
