import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


// function ticker(){
// const element = (
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   </div>
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// }

//setInterval(ticker,1000);
ReactDOM.render(
  <React.StrictMode>
    <App name={"Anu Caluclator"}/>
  </React.StrictMode>,
  document.getElementById('root')
 );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
