import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bigBox'>
        <Card />
        
        
       
    </div>
  </React.StrictMode>
);


reportWebVitals();
