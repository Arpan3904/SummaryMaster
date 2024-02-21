import React, { useState } from 'react';
import JSZip from 'jszip';

const FileUploader = () => {
  const [text, setText] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const zip = await JSZip.loadAsync(file);
    const doc = await zip.file('word/document.xml').async('text');

    const textContent = new DOMParser().parseFromString(doc, 'text/xml')
      .getElementsByTagName('w:t');

    const extractedText = Array.from(textContent).map((node) => node.textContent).join(' ');
    setText(extractedText);
  };

  return (
    <div>
      <h2>Upload a DOCX file:</h2>
      <input type="file" accept=".docx" onChange={handleFileUpload} />
      {text && (
        <div>
          <h2>Extracted Text:</h2>
          <p>{text}</p>
        </div>
      )}
      
    </div>
  );
};

export default FileUploader;
