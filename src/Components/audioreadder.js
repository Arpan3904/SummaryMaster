import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
function ImageToTextConverter() {
  const [imageSrc, setImageSrc] = useState('');
  const [text, setText] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      setImageSrc(reader.result);
      const { data: { text } } = await Tesseract.recognize(
        reader.result,
        'eng', // language
        { logger: (m) => console.log(m) } // optional logger
      );
      setText(text);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && <img src={imageSrc} alt="Uploaded" />}
      {text && <div style={{color:"white"}}>{text}</div>}
    </div>
  );
}

export default ImageToTextConverter;
