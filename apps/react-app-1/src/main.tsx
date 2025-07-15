// import { StrictMode } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { isHostedConfig } from './types/hostedConfig';

const loadRuntimeConfig = async () => {
  await fetch('https://d2utt9g60l5nz9.cloudfront.net/prod.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((config) => {
      window.__RUNTIME_CONFIG__ = config;
      if (!isHostedConfig(config)) {
        console.warn('Invalid runtime config format');
      }
    })
    .catch((error) => {
      console.error('Failed to load runtime config', error);
    });
};

loadRuntimeConfig().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<App />);
});
