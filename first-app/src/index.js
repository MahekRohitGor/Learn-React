import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function MyGreet(){
  // const name = "Mahek";
  // const element = <h1>Hello {name}</h1>;
  // return element;

  // const element = <h1>Hello {add(10,17)}</h1>;
  // return element;

  // const img = "https://pixabay.com/images/search/nature/"
  // const element = <img src={img}></img>
  // return element;
}

// function add(x,y){
//   return x+y;
// }

// root.render(<MyGreet />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
