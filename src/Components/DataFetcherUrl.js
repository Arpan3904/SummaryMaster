// App.js
import React, { useEffect,useState } from 'react';
import DataFetcherText from './DataFetcherText';
import axios from 'axios';

const DataFetcherUrl = ({ Url, sliderValue, onFetchComplete }) => {
  const [transcript, setTranscript] = useState('');
  useEffect(() => {
    const extractVideoId = (url) => {
      try {
        const parser = document.createElement('a');
        parser.href = url;
        const urlParams = new URLSearchParams(parser.search);
        return urlParams.get('v');
      } catch (error) {
        console.error('Error extracting video ID:', error);
        return null;
      }
    };
    const fetchData = async () => {
      const videoId = extractVideoId(Url);

    if (!videoId) {
      console.error('Invalid YouTube URL');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/getTranscript', { youtubeUrl: videoId });
      setTranscript(response.data.transcript);
    } catch (error) {
      console.error('Error fetching transcript:', error);
    }
    };

    fetchData();

  }, [Url]);

  return (
    <DataFetcherText text={transcript} onFetchComplete={onFetchComplete} sliderValue={sliderValue} />
  );
};

export default DataFetcherUrl;
