import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Mh  Nayeem";
const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div style={{width:"300px",height:"300px" , background:"pink",textAlign:"center",padding:"5px"}} >
        
        <h1 style={{color :"red" , fontSize:"25px" , fontFamily:"sans-serif" , paddingTop:"20px"}} >{name}</h1>
        <h6>Student of CSE</h6>
        <p>lorem ipsum doman do itsa kasur manus is lareo kilo isat manush kintu na</p>
        <p>{day + "/" + month + "/" + year}</p>
      </div>
    </div>
  </React.StrictMode>
);


reportWebVitals();
