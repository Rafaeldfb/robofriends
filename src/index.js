import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import CardList from './CardList'
import  'tachyons';
import { robots } from './robots';
//import Card from './Card.js';

ReactDOM.render(
  <div>
      <CardList robots={robots}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
