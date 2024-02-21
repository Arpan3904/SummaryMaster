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
import AudioReader from "./audioreadder.js";
import RelatedVideos from "./RelatedVideo.js";

// import Word1 from './wordtotext.js'

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
  const scrollToComponent = (componentId) => {
    const section = document.getElementById(componentId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    {/* <AudioReader></AudioReader> */}
    <Nav scrollToComponent={scrollToComponent}/>

      <Textchange />
      
      <div className='summary-container'>
      <div className='custom-divider'></div>
      <div className='summary-header'><h1>Enter an Artical URL or paste your Text</h1></div>
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

   
    {/* <FAQ /> */}
    <ChromeExtension />
    <Footer />
    </>
  );
};

export default App;
