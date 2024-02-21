// import React, { useState, useEffect } from 'react';
// import './styles/textchange.css'

// const DynamicTextComponent = () => {
//   const [displayText, setDisplayText] = useState("Run Live Example.");

//   useEffect(() => {
//     const firstText = "Youtube Video Link";
//     const secondText = "Text File";
//     const thirdText = "Audio-Video";
//     const intervalTime = 600;

//     const displayTextFunction = () => {
//       // display first text
//       setDisplayText(firstText);

//       // display second text
//       setTimeout(() => {
//         setDisplayText(secondText);
//       }, intervalTime * 3);

//       // display third text
//       setTimeout(() => {
//         setDisplayText(thirdText);
//       }, intervalTime * 5);
//     };

//     const interval = setInterval(() => {
//       displayTextFunction();
//     }, intervalTime * 7);

//     displayTextFunction();

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-dark">
//       <div className="container text-white d-flex flex-column justify-content-center display-1 fw-semibold" style={{ height: '50vh' }}>
//         <div>Get Summary</div>
//         <div id="dynamicContent" className="overflow-hidden">{displayText}</div>
//         <div className="text-warning">Done.</div>
//       </div>
//     </section>
//   );
// };

// export default DynamicTextComponent;
import React, { useEffect, useState } from 'react'


export default function TextChanger() {
    const [texts, setTexts] = useState([
        "Summarize any Paper",
        "Summarize any Paragraph",
        "Summarize any Youtube Videos"
      ]); // Array of text contents
      const [currentIndex, setCurrentIndex] = useState(0); 
      const [currentText, setCurrentText] = useState("");
      const [charIndex, setCharIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds
    
        return () => clearInterval(interval);
      }, [texts]);
    
      // Function to handle typing effect
      useEffect(() => {
        const timeout = setTimeout(() => {
          if (charIndex < texts[currentIndex].length) {
            setCurrentText((prevText) => prevText + texts[currentIndex][charIndex]);
            setCharIndex((prevIndex) => prevIndex + 1);
          } else {
            setCurrentText((prevText) => prevText.slice(0, -1));
            setCharIndex(0);
          }
        }, 100); // Typing speed
    
        return () => clearTimeout(timeout);
      }, [currentIndex, charIndex, texts]);

    return (
        <div className='front-container'>
            <div className="content-wrapper">
                <div className="content">{texts[currentIndex]}</div>
            </div>
            <div className='content'>In a Click.</div>
            <div className='front-info'><p>Summery Master helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.</p></div>
            <div className='front-last'>SUMMARIZE NOW - IT'S FREE</div>
        </div>
    )
}

