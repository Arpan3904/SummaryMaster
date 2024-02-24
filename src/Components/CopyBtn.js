import React from 'react';
import copy from './images/copy.png';
import './styles/myStyles.css';

function CopyBtn({ valueToCopy }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(valueToCopy);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(valueToCopy);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser');
    }
  };

  return (
    <button className='btn-copy' style={{ backgroundColor: "rgb(51,54,58)", border: "none" }}
      onClick={copyToClipboard}>
      <img style={{ backgroundColor: "rgb(51,54,58)" }} src={copy} alt="Copy" />
    </button>
  );
}

export default CopyBtn;


