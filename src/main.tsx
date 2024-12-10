import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// This is the entry point of the application, id="root" is the element of index.html where the application will be rendered
createRoot(document.getElementById('root')!).render(
  // StrictMode is a tool for highlighting potential problems in an application during development
  <StrictMode>
    <App />
  </StrictMode>,
);
