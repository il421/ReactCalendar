import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


ReactDOM.render(
  <Calendar />, document.querySelector('#app')
  );