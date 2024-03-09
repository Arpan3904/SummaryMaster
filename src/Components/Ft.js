import React from 'react';
import '../Components/styles/myStyles.css'; // Import CSS file for styling
import logo from './images/logo.png';

const Footer = ({ scrollToComponent }) => {
    return (
      <footer className="custom-footer">
        <div className="custom-footer-content">
          <div className="custom-footer-logo">
            <img src={logo} alt="Company Logo" style={{height:"13vh",width:"11vw"}}/>
            
          </div>
          <div className="custom-footer-links">
          <ul>
            <li>
            <a onClick={() => scrollToComponent("summarize")}>SummarizeNow</a>
            </li>
            <li>
            <a onClick={() => scrollToComponent("extensions")}>Extensions</a>
            </li>
            <li>
            <a onClick={() => scrollToComponent("features")}>Features</a>
            </li>
            <li>
            <a onClick={() => scrollToComponent("faq")}>FAQs</a>
            </li>
          </ul>
          </div>
        </div>
        <div className="custom-footer-bottom">
          <p>&copy; 2024 Summary Master. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;