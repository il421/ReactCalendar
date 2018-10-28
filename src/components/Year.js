import React from 'react';
import Month from "./Month";

const Year = (props) => {

  const year = [];

  for (let i = 0; i < 12; i++) {
    year.push(
      <Month 
        newMonth={i} 
        currentYear={props.currentYear} 
        onClickHandler={props.onClickHandler}
      />
    );
  }

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      { year }
    </div>);
};

export default Year;