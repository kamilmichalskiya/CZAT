import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './templates/Root';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
