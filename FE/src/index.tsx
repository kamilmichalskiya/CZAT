import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './templates/Root';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

// uncoment this code to enable mocking on localhost:3000
// if (process.env.NODE_ENV === 'development' && window.location.host === 'localhost:3000') {
//   const { worker } = require('./mocks/browser');
//   worker.start();
// }

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
