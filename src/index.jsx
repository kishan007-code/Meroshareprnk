// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';   // <-- your main app component
import './index.css';          // global styles

// create the root and render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
