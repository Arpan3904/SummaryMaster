import React, { useState } from "react";
import SummarizeBtn from "./SummarizeBtn";
import RangeSlider from "./RangeSlider";
import { useSelector } from "react-redux";
import DataFetcherText from "./DataFetcherText";
import DataFetcherUrl from "./DataFetcherUrl";
import SummarizeText from "./SummarizeText";
import Keywords from "./keyword";
import "./styles/myStyles.css";
import { useremail } from "./nav";

const Summary = ({ content, contentType, onDataReceived }) => {
  const sliderValue = useSelector((state) => state.sliderValue);
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isDataFetch, setIsDataFetch] = useState(false);
  const [summaryText, setSummaryText] = useState("");

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleFetchComplete = async (text) => {
    setSummaryText(text);
    setIsSummaryVisible(true);
    onDataReceived(isSummaryVisible, summaryText);
    console.log("aaa");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        useremail: useremail, // Assuming useremail is accessible here
        text: text,
        content: content,
        time: formatTimestamp(Date.now()),
      }),
    };

    try {
      const res = await fetch(
        "https://summary-master-6dea2-default-rtdb.firebaseio.com/USERDATA.json",
        options
      );
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSummarizeClick = async () => {
    setIsDataFetch(true);
    console.log(useremail);
  };

  return (
    <>
      {isDataFetch &&
        (contentType === "url" ? (
          <DataFetcherUrl
            Url={content}
            onFetchComplete={handleFetchComplete}
            sliderValue={sliderValue}
          />
        ) : contentType === "text" || contentType === "file" ? (
          <DataFetcherText
            text={content}
            onFetchComplete={handleFetchComplete}
            sliderValue={sliderValue}
          />
        ) : null)}

      {contentType === "url" && isSummaryVisible && (
        <SummarizeText Text={summaryText} contentType="url" />
      )}

      <center>
        <SummarizeBtn onClick={handleSummarizeClick} />
      </center>
      <center>
        <Keywords />
      </center>
      <div className="custom-divider"></div>
    </>
  );
};

export default Summary;
