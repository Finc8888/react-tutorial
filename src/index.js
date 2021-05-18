import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lesson from './component/Lesson'
import reportWebVitals from './reportWebVitals';

const createdElem1 = React.createElement('div', null, 'Simple div with text')
const createdElem2 = React.createElement('input', {className: 'just-class'});

ReactDOM.render(
  <React.StrictMode>
    {createdElem1}
    {createdElem2}
      <Lesson/>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
