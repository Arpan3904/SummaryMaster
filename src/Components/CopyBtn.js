import React from 'react';
import copy from './images/copy.png';
import './styles/myStyles.css';

function CopyBtn({ valueToCopy }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(valueToCopy);
  };

  return (
    <button className='btn-copy' style={{ backgroundColor: "rgb(51,54,58)", border: "none" }}
      onClick={copyToClipboard}>
      <img style={{ backgroundColor: "rgb(51,54,58)" }} src={copy} alt="Copy" />
    </button>
  );
}

export default CopyBtn;


