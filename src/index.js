import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.headers.post["Content-Type"] = "application/json";    
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

