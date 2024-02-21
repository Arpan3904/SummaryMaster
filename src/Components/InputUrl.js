import React, { useState, useEffect } from "react";
import axios from "axios";
import PasteBtn from "./PasteBtn";
import Summary from './Summary'
import RangeSlider from "./RangeSlider";
import RelatedVideos from "./RelatedVideo";
import './styles/myStyles.css';




const InputUrl = () => {

  const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [videoInfo, setVideoInfo] = useState({});
  const [channelInfo, setChannelInfo] = useState({});

  const [summaryText, setSummaryText] = useState('');
  const handleDataFromSummary = (Visible, Summary) => {
    setIsSummaryVisible(Visible);
    setSummaryText(Summary);
  };


  const extractVideoId = (url) => {
    const match = url.match(
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const fetchVideoInfo = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyCZGkQI8NTYXA9wI5uhy0VC-qjRvsKH3WM `
      );

      if (response.data.items && response.data.items.length > 0) {
        setVideoInfo(response.data.items[0].snippet);
        // Fetch channel information using the channel ID
        fetchChannelInfo(response.data.items[0].snippet.channelId);
      }
    } catch (error) {
      console.error("Error fetching video information:", error.message);
    }
  };

  const fetchChannelInfo = async (channelId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&key=AIzaSyCZGkQI8NTYXA9wI5uhy0VC-qjRvsKH3WM`
      );
      console.log("Channel API Response:", response.data);

      if (response.data.items && response.data.items.length > 0) {
        setChannelInfo(response.data.items[0].snippet);
      }
    } catch (error) {
      console.error("Error fetching channel information:", error.message);
    }
  };

  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    const id = extractVideoId(inputUrl);
    setVideoId(id);

    if (id) {
      fetchVideoInfo(id);
    }
  };

  const handlePaste = (content) => {
    setUrl(content);
    const id = extractVideoId(content);
    setVideoId(id);

    if (id) {
      fetchVideoInfo(id);
    }
  };

  return (
    <div >
      <div >
        <center>
          <div className='url-container' style={{ display: "flex", width: "70vw", alignItems: "center" }}>
            <input
              type='text'
              placeholder="Enter YouTube URL"
              value={url}
              onChange={handleUrlChange} className='url-text'></input>
            <div className="paste-button" >
              <PasteBtn setValue={handlePaste} />
            </div>
          </div>
        </center>
      </div>
      


      {
        videoId && (
          <>
            <div style={{
              resize: "none",
              marginLeft: "20.5vw",
              marginTop: "2vh",
              width: "60vw",
              height: "60vh",
              backgroundColor: "white",
              borderRadius: "6px",
            }
            }>
              <iframe
                width="100%"
                height="415"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="video-iframe"
              ></iframe>
              
            </div>
            <br></br>
              <br></br>
              <br></br>
              <br></br>
              
            <div style={{marginTop:"3vh"}}>
            <center><RangeSlider /></center>
            </div>
            <Summary contentType="url" content={url} onDataReceived={handleDataFromSummary} />
             <RelatedVideos />

            {url &&<> <div className='custom-divider'></div>
            <center><div style={{color:"white",width:"70vw"}}>
            
            <h3>Video Information</h3>
            <p className="info-heading">Title: {videoInfo.title}</p>
            <p>Description: {videoInfo.description}</p>

            </div></center>
            <div className='custom-divider'></div>
            <center><div style={{color:"white",width:"70vw"}}>
            <h3>Channel Information</h3>
            <p className="info-heading">Channel Name: {channelInfo.title}</p>
            <p>Channel Description: {channelInfo.description}</p>

            </div></center> </>}
          </>
        )
      }
    </div >
  );
};

export default InputUrl;
