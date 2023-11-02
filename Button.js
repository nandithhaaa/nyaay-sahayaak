import React from 'react';

const Button = ({ icon, title, content }) => (
  <button className="custom-button">
    <i className={icon}></i>
    {title}
    <span>{content}</span>
  </button>
);

export default Button;
