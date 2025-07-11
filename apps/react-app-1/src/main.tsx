// import { StrictMode } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

async function loadRuntimeConfig() {
  try {
    const response = await fetch('/config.json');
    const config = await response.json();
    window.__RUNTIME_CONFIG__ = config;
  } catch (error) {
    console.error('Failed to load runtime config', error);
  }
}

loadRuntimeConfig().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<App />);
});
