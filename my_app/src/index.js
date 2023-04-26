import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <h1>Our Members</h1>
      <div className='bigBox'>
        <div> <Card /></div>
        <div> <Card /></div>
        <div> <Card /></div>
        <div> <Card /></div>
        <div> <Card /></div>
      </div>
    </div>
  </React.StrictMode>
);


