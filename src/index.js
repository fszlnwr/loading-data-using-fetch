import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as d3 from 'd3'


// const fetchText = async(url) => {
//   const response = await fetch(url);
//   return await response.text();
// };
const csvUrl = 'https://gist.githubusercontent.com/fszlnwr/b54bbfadddded31c3445d1ddda347046/raw/css_named_colors.csv';
d3.csv(csvUrl).then(data => {
  let message = '';
  message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kB \n';
  message = message + data.length + ' rows \n';
  message = message + data.columns.length + ' columns \n';
  document.getElementById('message-container').textContent = message;
});

// fetchText(csvUrl).then(text => {
//   const data = d3.csvParse(text);
//   let message = '';
//   message = message + Math.round(text.length / 1024) + ' kB \n';
//   message = message + data.length + ' rows \n';
//   message = message + data.columns.length + ' columns \n';
//   document.getElementById('message-container').textContent = message;
// });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

