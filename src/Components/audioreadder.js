import React, { useState } from 'react';
import axios from 'axios';
import '../Components/styles/myStyles.css'
import upload from './images/file.png';
import { Divider } from '@mui/material';

const AudioReader = () => {
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (!file || !file.type.includes('audio')) {
            setError('Please select a valid audio file.');
            return;
        }

        setIsLoading(true);
        setError(null);

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

            setText(response.data.textContent);
        } catch (error) {
            console.error('Error uploading and extracting text:', error);
            setError('Failed to read audio file. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>       <div style={{ color: "white" }}>
                <input type="file" accept=".mp3, .wav" onChange={handleFileChange} />
                {isLoading && <p>Uploading and extracting text...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {text && <pre>{text}</pre>}

            </div></>
    );
};

export default AudioReader;
