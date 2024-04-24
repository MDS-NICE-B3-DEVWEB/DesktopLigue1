import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Home from './pages/HomePage/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>
);
