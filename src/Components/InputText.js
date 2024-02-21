import React, { useState } from "react";
import PasteBtn from "./PasteBtn";
import Summary from "./Summary";
import SummarizeText from "./SummarizeText";
import RelatedVideos from "./RelatedVideo";
import RangeSlider from "./RangeSlider";

const InputText = () => {
  const [text, setText] = useState("");
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [summaryText, setSummaryText] = useState("");

  const handleDataFromSummary = (isVisible, summary) => {
    setIsSummaryVisible(isVisible);
    setSummaryText(summary);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

 

  return (
        <>
    <center><RangeSlider /></center>
      <div style={{display:"flex"}}>
        <div
          style={
            isSummaryVisible
              ? {
                  height: "60vh",
                  width: "40vw",
                  backgroundColor: "white",
                  marginRight: "5px",
                  resize: "none",
                  marginLeft: "10vw",
                  borderRadius: "6px",
                }
              : {
                  resize: "none",
                  marginLeft: "25vw",
                  width: "50vw",
                  height: "60vh",
                  backgroundColor: "white",
                  borderRadius: "6px",
                }
          }
        >
          <div className="paste-button">
            <PasteBtn setValue={setText} />
          </div>

          <textarea
            value={text}
            onChange={handleTextChange}
            className="inputfield"
            style={
              isSummaryVisible
                ? {
                    width: "39vw",
                    height: "48vh",
                    border: "none",
                    fontSize: "large",
                  }
                : {
                    width: "49vw",
                    height: "48vh",
                    outline: "none",
                    border: "none",
                    fontSize: "large",
                  }
            }
            placeholder="Enter text Or Paste"
          />
        </div>

        {isSummaryVisible && <SummarizeText Text={summaryText} />}
      </div>
      
      <Summary
        contentType="text"
        content={text}
        onDataReceived={handleDataFromSummary}
      />

      {isSummaryVisible && <RelatedVideos />}
    
    </>
  );
};

export default InputText;
