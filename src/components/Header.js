import React from 'react';
import dateFns from "date-fns";

const Header = (props) => {
  const dateFormat = "YYYY";

  return (
    <div className="header">
      <div className="row mt-5 mb-5">
        <div className="col text-center" onClick={ props.prevYear }>
          <button className="btn-arrow btn-arrow--left">Prev</button>
        </div>
    
        <div className="col text-center">
          <span className="h2">{dateFns.format(props.currentYear, dateFormat)}</span>
        </div>

        <div className="col text-center" onClick={ props.nextYear }>
          <button className="btn-arrow btn-arrow--right">Next</button>
        </div>
      </div>
      <div className="row header__tips d-flex flex-row flex-wrap justify-content-between mb-3">
        {
          props.specialDays.map((d) => {
            return <div data-toggle="tooltip" title="Click a day to mark it!" key= { d }>{ d }</div>;
          })
        }
      </div>
    </div>
  )
};

export default Header;