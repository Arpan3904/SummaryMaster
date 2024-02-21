
import React, { useState } from "react";
import SummarizeBtn from "./SummarizeBtn";
import RangeSlider from "./RangeSlider";
import { useSelector } from 'react-redux';
import DataFetcherText from './DataFetcherText';
import DataFetcherUrl from './DataFetcherUrl';
import SummarizeText from "./SummarizeText";
import Keywords from "./keyword";
import './styles/myStyles.css';

const Summary = ({ content, contentType, onDataReceived }) => {

  const sliderValue = useSelector((state) => state.sliderValue);
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isDataFetch, setIsDataFetch] = useState(false);
  const [summaryText, setSummaryText] = useState('');


  const handleFetchComplete = async  (text) => {
    setSummaryText(text);
    setIsSummaryVisible(true);
    onDataReceived(isSummaryVisible, summaryText);

     const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text
        })
      };
      const res = await fetch(
        'https://summary-master-6dea2-default-rtdb.firebaseio.com/USERDATA.json',
        options
      );
      console.log(res);
    

  };

  const handleSummarizeClick = async () => {
    setIsDataFetch(true);
  };

  return (



    <>

       {isDataFetch && (contentType === "url" ? (<DataFetcherUrl Url={content} onFetchComplete={handleFetchComplete} sliderValue={sliderValue} />) :
        contentType === "text" || contentType === "file" ? (<DataFetcherText text={content} onFetchComplete={handleFetchComplete} sliderValue={sliderValue} />) : null)}
        console.log("summary")
      {contentType === "url" && isSummaryVisible && (
          <SummarizeText Text={summaryText}  contentType="url" />
        )}
        
      <center><SummarizeBtn onClick={handleSummarizeClick} /></center>
      <center><Keywords/></center>
      
    </>


  );
};

export default Summary;

