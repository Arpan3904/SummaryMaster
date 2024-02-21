// RangeSlider.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import { setSliderValue } from "./sliderReducer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const RangeSlider = () => {
  const dispatch = useDispatch();
  const sliderValue = useSelector((state) => state.sliderValue);
  console.log(sliderValue);

  const handleSliderChange = (event, newValue) => {
    dispatch(setSliderValue(newValue));
  };

  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          root: {
            color: "rgb(75, 74, 207)", // Set your desired color here
          },
          track: {
            backgroundColor: "rgb(75, 74, 207)",
            // Set your desired color here
          },
          thumb: {
            backgroundColor: "white", // Set your desired color here
          },
          valueLabel: {
            color: "white", // Set your desired color here
          },
        },
      },
    },
  });

  return (
      <div style={{ display: "flex",marginLeft:"27vw"}}>
        <div style={{ color: "white",marginRight:"1vw" }}>Summary Length : </div>
        <ThemeProvider theme={theme}>
          <Slider
            min={25}
            max={75}
            value={sliderValue}
            onChange={handleSliderChange}
            aria-label="Default"
            valueLabelDisplay="auto"
            className="summary-progress"
            style={{
              background: `linear-gradient(to right, rgb(75, 74, 207) ${sliderValue}%, #f0f0f0 ${sliderValue}%)`,
              width: "40%",
              height: "1px",
            }}
          />
        </ThemeProvider>
        <div style={{ color: "white",marginLeft:"1vw" }}>{sliderValue}%</div>
      </div>

    // <div style={{ display: 'flex', justifyItems: 'center', marginBottom: '3vh',marginTop:'7vh',marginLeft:"8vw" }}>
    //     <div style={{ fontSize: '18px', color: 'rgb(155, 169, 180)',marginLeft:'17vw' }}>Summary Length :</div>
    //     <input
    //       type="range"
    //       min="25"
    //       max="75"
    //       value={sliderValue}
    //       onChange={handleSliderChange}
    //       className="summary-progress"
    //       style={{ background: `linear-gradient(to right, rgb(75, 74, 207) ${sliderValue}%, #f0f0f0 ${sliderValue}%)`,width:'40%' }}
    //     />
    //     <span style={{ color: "white" }}>{sliderValue}%</span>
    //   </div>
  );
};

export default RangeSlider;
