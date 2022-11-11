import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './templates/Root';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser');
//   worker.start();
// }

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
