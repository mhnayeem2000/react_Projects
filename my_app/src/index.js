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
      <div className='boxStyle' >
        <img className='img' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"></img>
        
        <h1 className='h1Style' >{name}</h1>
        <h4 className='h4Style'  >-Student of CSE</h4>
        <p>lorem ipsum doman do itsa kasur manus is lareo kilo isat manush kintu na</p>
        <p><b>{day + "/" + month + "/" + year}</b></p>
      </div>
    </div>
  </React.StrictMode>
);


reportWebVitals();
