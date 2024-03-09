// App.js
import React, { useState } from "react";
import FileSection from "./FileSection";
import TextSection from "./TextSection";
import UrlSection from "./UrlSection.js";
import Nav from './nav';
import Textchange from './TextChanger.js';
import Footer from "./Footer.js";
import FAQ from "./FAQ.js";
import ChromeExtension from "./Extension.js";
import Ft from './Ft.js';


const App = () => {
  const [action,setAction] = useState("");
  const handleUrl = ()=>{
      setAction("1");
  }
  const handleText = ()=>{
      setAction("2");
  }
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const scrollTo = (element, duration) => {
    const navbarHeight = 130;
    const targetPosition = element.offsetTop - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const animation = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };

  const scrollToComponent = (componentId) => {
    const section = document.getElementById(componentId);
    if (section) {
      scrollTo(section, 1000); // Adjust duration (e.g., 1000ms for 1 second)
    }
  };

  return (
    <>
    <Nav scrollToComponent={scrollToComponent}/>
      <Textchange  scrollToComponent={scrollToComponent}/>
      
      <div className='summary-container'>
      <div className='custom-divider'></div>
      <div className='summary-header' id='summarize'><h1>Enter an Artical URL or paste your Text</h1></div>
      <center><div className='summary-action'>
        <button onClick={() => handleOptionChange("file")}>Upload File</button>
        <button onClick={() => handleOptionChange("url")}>Add URL</button>
        <button onClick={() => handleOptionChange("text")}>Add text</button>
      </div></center>
      {selectedOption === "file" && <FileSection />}
      {selectedOption === "text" && <TextSection />}
      {selectedOption === "url" && <UrlSection />}
      <div className='custom-divider'></div>
      
    </div>

   
    
    <div id="extensions">
      <ChromeExtension />
    </div>
    <div id="features">
    <Footer />
    </div>
    <div id="faq">
    <FAQ />
    </div>
    <Ft scrollToComponent={scrollToComponent}/>
    </>
  );
};

export default App;
