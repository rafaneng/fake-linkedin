import React from 'react';
import './styles.css'

const HeaderNavButton = ({icon, text, highlighted=false, className=""}) => {
  return (
    <button className={`header-nav-button ${(highlighted && 'header-nav-button-highlight') || 'header-nav-button-idle'} ${className}`} >
      <span>{icon}</span>
      <p>{text}</p>
    </button>
  );
};

export default HeaderNavButton;