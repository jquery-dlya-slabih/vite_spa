import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.tsx';
import './global.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
