// sliderReducer.js
const SET_SLIDER_VALUE = 'SET_SLIDER_VALUE';

export const setSliderValue = (value) => ({
  type: SET_SLIDER_VALUE,
  payload: value,
});

const initialState = {
  sliderValue: 50,
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDER_VALUE:
      return {
        ...state,
        sliderValue: action.payload,
      };
    default:
      return state;
  }
};

export default sliderReducer;
