import { createStore } from 'redux';
import sliderReducer from './sliderReducer';

const store = createStore(sliderReducer);

export default store;