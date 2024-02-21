import React from 'react';
import './styles/myStyles.css'

const SummarizeBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className='summary-button'>
      SUMMARIZE THIS
    </button>
  );
};

export default SummarizeBtn;