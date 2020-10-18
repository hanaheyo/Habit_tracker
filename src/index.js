import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

// root에 app이라는 component를 연결하는 것.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
