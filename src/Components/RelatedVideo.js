import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { keyset } from "./DataFetcherText";


const RelatedVideos = () => {
  const [videos, setVideos] = useState([]);
  console.log(keyset);
  const handleSearch = async () => {
    // Extract keywords or topics from the input paragraph
    const keywords = keyset // You need to implement this function
    console.log(keywords);
    try {
      // Search for related videos using the extracted keywords
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        
        params: {
          part: 'snippet',
          q: keywords.join(' '), // Concatenate keywords into a search query
          type: 'video',
          key: 'AIzaSyCZGkQI8NTYXA9wI5uhy0VC-qjRvsKH3WM',
        },
      });
      console.log("hello"+response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching related videos:', error);
    }
  };
  useEffect(() => {
    handleSearch(); // Call handleSearch when component mounts
  }, [keyset]);
  return (
  //   <div>
        
  //     <h2 style={{color:"white",fontSize:'30px',fontWeight:"bold",marginLeft:"10vw"}}>Related Videos</h2>
  //     <div className="related-videos-container" style={{display:"flex",width:"80vw"}}>
  //     {videos.map((video) => (
  // <div className="related-video" key={video.id.videoId}>
  //   <iframe
  //     width="100%" // Adjusted width
  //     height="315" // Adjusted height (you can adjust this according to your needs)
  //     src={`https://www.youtube.com/embed/${video.id.videoId}`}
  //     title={video.snippet.title}
  //     frameBorder="0"
  //     allowFullScreen   
  //   />
  // </div>
  <div>
        <center>
      <h2 style={{color:"white",fontSize:'30px',fontWeight:"bold"}}>Content Related Videos :</h2>
      </center><div className="video-gallery">
      {videos.map((video) => (
  <div className="video" key={video.id.videoId}>
    <iframe
      width="110%" // Adjusted width
      height="110%" // Adjusted height (you can adjust this according to your needs)
      src={`https://www.youtube.com/embed/${video.id.videoId}`}
      title={video.snippet.title}
      frameBorder="0"
      allowFullScreen   
    />
    <h3 className="video-title">{video.snippet.title}</h3>
  </div>
))}
      </div>
    </div>
  );
};

export default RelatedVideos;
