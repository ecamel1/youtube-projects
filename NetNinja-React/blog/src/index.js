import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Root that is rendered in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode gives us warnings during development
  <React.StrictMode>
    <App /> {/* This is the App Component */}
  </React.StrictMode>
);
