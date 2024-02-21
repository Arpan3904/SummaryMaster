// Keywords.js
import React from "react";
import { keyset } from "./DataFetcherText";
import '../Components/styles/myStyles.css'
import { colors } from "@mui/material";

const Keywords = () => {
  if (!keyset) {
    // Handle the case where keyset is undefined
    return <></>;
  } 

  return (
   
   
  <>
  <center>
  <div style={{display:"flex",alignItems:"center",marginLeft:"19vw",marginRight:'10vw'}}>
    <h2 style={{color:"white",paddingTop:"7vh",marginRight:'1vw'}}>Keywords :</h2>
  
    <div className="keyword-container">
    {Array.from(keyset).map((keyword, index) => (
          <div key={index} className="keyword" >
            {keyword}
          </div>
        ))}
    </div>
  </div>
  </center>
  </>

  );
};

export default Keywords;
