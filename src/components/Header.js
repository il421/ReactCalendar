import React from 'react';
import dateFns from "date-fns";

const Header = (props) => {
  const dateFormat = "YYYY";

  return (
    <div className="row mt-5 mb-5">
    <div className="col text-center" onClick={props.prevYear}>
      <button className="btn-arrow btn-arrow--left">Prev</button>
    </div>
    
    <div className="col text-center">
      <span className="h2">{dateFns.format(props.currentYear, dateFormat)}</span>
    </div>

    <div className="col text-center" onClick={props.nextYear}>
      <button className="btn-arrow btn-arrow--right">Next</button>
    </div>
  </div>
  )
};

export default Header;