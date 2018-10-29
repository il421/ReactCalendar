import React from 'react';

const Popup = (props) => {

  const colors = [
    "rgba(215, 125, 44, 0.4)", 
    "rgba(66, 124, 44, 0.4)", 
    "rgba(66, 124, 255, 0.4)", 
    "rgba(215, 44, 144, 0.4)",
    "rgba(255, 255, 255, 1)"
  ];

  let dayBtns = [];

  for (let i = 0; i < 5; i++) {
    dayBtns.push(
      <button 
        data-color={ colors[i] } 
        onClick={ (e) => props.chooseColor(e) }
      >
        { props.specialDays[i] }
      </button>
    );
  };

  return (
    <div className="popup">
      <div className="popup__btns">
       { dayBtns }
      </div>
    </div>
    );
};

export default Popup;