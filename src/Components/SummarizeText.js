import React, { useState, useEffect } from "react";

import CopyBtn from "./CopyBtn";
const SummarizeText = ({ Text, contentType }) => {
  const [text, setText] = useState("");


  useEffect(() => {
    setText(Text);
  }, [Text]);

  return (
    <div style={contentType === 'url' ? {
      resize: "none",
      marginLeft: "20.5vw",
      marginTop: "0vh",
      width: "60vw",
      height: "70vh",
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderRadius: "6px",
    } : { display: "flex", flexDirection: "column", height: '60vh', resize: "none", width: '40vw', borderRadius: "6px", backgroundColor: "white" }}>
      <div className="copy-button">
        <CopyBtn valueToCopy={text} />
      </div>
      <textarea
        name="summarizeText"
        id="summarizeText"
        placeholder="First Enter Text Above than Click On Summarize"
        required=""
        value={text}
        readOnly={true}
        rows={(text.length / 76) + 1}
        style={contentType === 'url' ? {
          resize: "none",
          width: "59.6vw",
          height: "60vh",
          backgroundColor: "white",
          borderRadius: "1px",
        }  : { height: '58vh', resize: "none", borderRadius: '6px', width: '39.5vw', backgroundColor: "white", border: "none" }}
      ></textarea>
    </div>
  );
};

export default SummarizeText;
