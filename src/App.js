import React from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import Home2 from './Components/Home2.js';
// import Signin from './pages/signin';
import Register from '../src/Components/registerandlogin.js'
import Reset from './Components/forgotpassword.js'
import './App.css'
const App = () => {
  return (
    <div className='App'>
   
      <Router>
        <Routes>
        <Route path="/" element={<> <Home2/></>} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/login" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/login/home" element={<Home2 />} />
       
        </Routes>
      </Router>
    </div>
  );
};

export default App;