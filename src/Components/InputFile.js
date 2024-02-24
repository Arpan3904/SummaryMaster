import React, { useState } from "react";
import Summary from "./Summary";
import CopyBtn from "./CopyBtn";
import RangeSlider from "./RangeSlider";
import SummarizeText from "./SummarizeText";
import RelatedVideos from "./RelatedVideo";
import JSZip from 'jszip';
import { Divider } from '@mui/material';
import upload from './images/file.png';
import axios from 'axios';
import Tesseract from 'tesseract.js';

const InputFile = () => {
  const [file, setFile] = useState("");
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [text, setText] = useState("");
  const [drag, setDrag] = useState(true);
  const [summaryText, setSummaryText] = useState('');
  const [isFileText, setIsFileText] = useState(false);
  const handleDataFromSummary = (Visible, Summary) => {
    setIsSummaryVisible(Visible);
    setSummaryText(Summary);
  };



  const handleTextChange = (e) => {
    setText(text);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDrag(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    handleFileChange({ target: { files: [droppedFile] } });
    setDrag(true);
  };
  const handleFileChange = async (event) => {
    if (drag) {
      document.getElementById('fileInput').click();
    }
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = event.target.files[0];
      setFile(file);

      if (file) {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        console.log(fileExtension);
        if (fileExtension === "txt") {
          const reader = new FileReader();

          reader.onload = (event) => {
            const content = event.target.result;
            setText(content);

          };

          reader.readAsText(file);
          setIsFileText(true);
        } else if (fileExtension === "docx") {
          console.log("docx");
          const zip = await JSZip.loadAsync(file);
          const doc = await zip.file('word/document.xml').async('text');

          const textContent = new DOMParser().parseFromString(doc, 'text/xml')
            .getElementsByTagName('w:t');

          const extractedText = Array.from(textContent).map((node) => node.textContent).join(' ');
          console.log("extractedText");
          setText(extractedText);
          setIsFileText(true);
        }
        else if (fileExtension === "mp3") {
          try {
            const formData = new FormData();
            formData.append('audioFile', file);
            console.log("called");
            const response = await axios.post('http://localhost:8000/upload-audio', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            console.log("called11");

            setText(response.data.textContent.replace(/(\r\n|\n|\r)/gm,""));
            setIsFileText(true);
          } catch (error) {
            console.error('Error uploading and extracting text:', error);

          }
        }
        else if (fileExtension === "mp4") {
          try {
            const formData = new FormData();
            formData.append('videoFile', file);
            const response = await axios.post('http://localhost:8001/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            
            setText(response.data.textContent.replace(/(\r\n|\n|\r)/gm,""));
            setIsFileText(true);

          } catch (error) {
            console.error('Error uploading and extracting text:', error);

          }
        }
        else if (fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "png" || fileExtension === "bmp" || fileExtension === "gif" || fileExtension === "tiff") {
          const reader = new FileReader();
  
          reader.onload = async () => {
            const { data: { text } } = await Tesseract.recognize(
              reader.result,
              'eng', // language
              { logger: (m) => console.log(m) } // optional logger
            );
            setText(text.replace(/(\r\n|\n|\r)/gm,""));
            setIsFileText(true);
          };
  
          reader.readAsDataURL(file);
        }
        else {
          console.error("Unsupported file format");
        }
      }
    }
  };

  return (
    <>
      <center>

        <div className="fileupload-dashed" style={{ height: '26vh', width: '30vw' }} onDragOver={handleDragOver}
          onDrop={handleDrop}>
          <center>
            <div>
              <img src={upload} style={{ height: '5vh', width: '3vw' }} alt="File" />
              <p>Drag and drop files here</p>
              <Divider> or </Divider>

            </div>

            <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />
            <button
              type="button" // Change type to button
              onClick={handleFileChange} // Handle click event to trigger file input click
              style={{ backgroundColor: "rgb(192, 192, 192)", height: "6vh", width: "20vw", borderRadius: "6px", border: "none", margin: "1.5vh" }}
            >
              Browse Files
            </button>
          </center>

        </div>
      </center>
      <center style={{ marginTop: "1.5vh" }}><RangeSlider /></center>
      {isFileText && (<div style={{ display: "flex" }}>
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


          <div className="copy-button">
            <CopyBtn valueToCopy={text} />


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
      )}
      {isFileText && <Summary contentType="file" content={text} onDataReceived={handleDataFromSummary} />}
      {isSummaryVisible && <RelatedVideos />}
    </>
  );
};

export default InputFile;
