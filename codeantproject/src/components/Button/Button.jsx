import React from 'react';
import './Button.css';

const Button = ({ imgSrc, text }) => {
  return (
    <button className='option-button'>
        <img src={imgSrc} alt="" className='option-image' />
        {text}
    </button>
  );
};

export default Button;