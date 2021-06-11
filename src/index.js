import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Card from './Card.js';
import { robots } from './robots'


const prefix_url = 'https://robohash.org/';

ReactDOM.render(
  <div padding={10} position={'center'}>
      <Card name={robots[0].name} mailAdress={robots[0].email} robo_url={prefix_url + robots[0].name}/>
      <Card name={robots[1].name} mailAdress={robots[1].email} robo_url={prefix_url + robots[1].name}/>
      <Card name={robots[2].name} mailAdress={robots[2].email} robo_url={prefix_url + robots[2].name}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
