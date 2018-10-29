import React from 'react';
import dateFns from "date-fns";
import Year from "./Year";
import Header from "./Header";
import Popup from "./Popup";

export default class Calendar extends React.Component {
  state = {
    currentYear: new Date(),
    visability: false,
    color: null,
    day: null,
    specialDays: [
      "Holiday",
      "Birthday",
      "Busy",
      "Anniversary",
      "Jusy a day"
    ]
  };

  nextYear = () => {
    this.setState({
      currentYear: dateFns.addYears(this.state.currentYear, 1)
    });
  };

  prevYear = () => {
    this.setState({
      currentYear: dateFns.subYears(this.state.currentYear, 1)
    });
  };

  onClickHandler = (e) => {
    const popup = document.querySelector('.popup');

  	this.setState({
      visability: true,
      day: e.target.parentNode
    });

    popup.style.left = e.pageX - popup.offsetWidth + 'px';
    popup.style.top = e.pageY + 'px';
  };

  chooseColor = (e) => {
    if(this.state.visability) {
      this.setState({
        visability: false,
        color: e.target.getAttribute('data-color')
      });
    }
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        visability: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyDown, false);
  };
  
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyDown, false);
  };

  componentDidUpdate(prevState) {
    if (this.state.color !== null) {
      this.state.day.style.backgroundColor = this.state.color;
      this.setState({
        color: null
      });
    }
  };

  render() {
    return (
      <div className="container calendare">
        <Header 
          currentYear={ this.state.currentYear }
          nextYear={ this.nextYear }
          prevYear={ this.prevYear }
          specialDays={ this.state.specialDays }
        />
        <Year 
          currentYear={ this.state.currentYear } 
          onClickHandler={ this.onClickHandler }
        />
        <div className="popup">
          { this.state.visability && (
            <Popup 
              chooseColor={ this.chooseColor }
              specialDays={ this.state.specialDays }
               />
               ) }
        </div>
      </div>
    )
  }
}