import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/global-style.css';
import Home from './components/templates/Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
