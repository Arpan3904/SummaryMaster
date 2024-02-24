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
      
    {/* <div className="mx-auto w-3/4 sm:w-5/6 max-w-[1024px] flex flex-col items-center justify-center">
        <h3 className="h3 mb-4 text-zinc-200">
          Enter an Article URL or paste your Text
        </h3>
        <div className="w-full flex-1 py-4 sm:py-6 md:p-8 !pb-6 space-y-10 flex flex-col">
        <div className="rounded-xl w-fit p-0.5 mx-auto">
                  <div className="relative">
                    <div className="sm:block rounded-xl flex gap-1 mb-1">
                      <button
                        onClick={() => handleOptionChange("file")}
                        className="py-2.5 px-5 flex-col items-center inline-flex font-medium bg-gray-700 text-base text-white"
                      >
                        Upload file
                      </button>
                      <button
                        onClick={() => handleOptionChange("url")}
                        className="py-2.5 px-5 flex-col items-center inline-flex font-medium bg-gray-700 text-base text-white"
                      >
                        Add URL
                      </button>
                      <button
                        onClick={() => handleOptionChange("text")}
                        className="py-2.5 px-5 flex-col items-center inline-flex font-medium bg-purple-600 text-base text-white"
                      >
                        Add text
                      </button>
                    </div>
                  </div>
                </div> */}
          
                {/* <div className="flex gap-4">
                <div className="block w-full focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm font-normal relative">
                    

      {selectedOption === "file" && <FileSection />}
      {selectedOption === "text" && <TextSection />}
      {selectedOption === "url" && <UrlSection />}
    </div> </div></div></div>
      <Word1 /> */}
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
