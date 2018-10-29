import React from 'react';
import dateFns from "date-fns";

const Month = (props) => {
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

  let currentDate = props.currentYear;

  const monthStart = dateFns.startOfMonth(new Date(currentDate.getFullYear(), props.newMonth));
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = "D";
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate;


  while (day <= endDate) {

    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);

      days.push(
        <div
          className={`${
            !dateFns.isSameMonth(day, monthStart) ? "disabled month__row" : 'month__row' 
          }`}
          key={ day } onClick={ (e) => props.onClickHandler(e) }
        >
          <span>{ formattedDate }</span>
        </div>
      );

      day = dateFns.addDays(day, 1);
    }

    rows.push(
      <div className="row justify-content-between" key={ day }>
        { days }
      </div>
    );
    
    days = [];
  }

  return (
    <div className="col-6 col-md-4 month mb-5">

      <div className="row font-weight-bold">
        { monthsOfYear[props.newMonth] }
      </div>

      <div className="row justify-content-between days-of-week">
        {
          daysOfWeek.map((d) => {
            return <div className="p-1" key={ d }>{ d }</div>
          })
        }
      </div>

      <div>
        { rows }
      </div>

    </div>

  )
};

export default Month;