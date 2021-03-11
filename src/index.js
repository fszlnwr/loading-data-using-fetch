import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as d3 from 'd3';
import { message } from './Message'


// const fetchText = async(url) => {
//   const response = await fetch(url);
//   return await response.text();
// };
// fetchText(csvUrl).then(text => {
//   const data = d3.csvParse(text);
//   let message = '';
//   message = message + Math.round(text.length / 1024) + ' kB \n';
//   message = message + data.length + ' rows \n';
//   message = message + data.columns.length + ' columns \n';
//   document.getElementById('message-container').textContent = message;
// });

const csvUrl = 'https://gist.githubusercontent.com/fszlnwr/b54bbfadddded31c3445d1ddda347046/raw/css_named_colors.csv';



const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  return <pre>{data ? message(data) : 'loading'}</pre>
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

