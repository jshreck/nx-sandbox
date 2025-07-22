import * as ReactDOM from 'react-dom/client';
import App from './app/app';
const { isHostedConfig } = await import('@libs/configs');

const loadRuntimeConfig = async () => {
  if (window.location.hostname === 'localhost') {
    let reactApp1LocalConfig = {};
    try {
      reactApp1LocalConfig = await import('../local-config/react-app-1.json');
    } catch (e) {
      // File does not exist or failed to load
      reactApp1LocalConfig = {};
      console.error('Failed to load local config', e);
    }
    window.__RUNTIME_CONFIG__ = reactApp1LocalConfig;
    if (!isHostedConfig(reactApp1LocalConfig)) {
      console.warn('Invalid runtime config format');
    }
  } else {
    await fetch('https://d2utt9g60l5nz9.cloudfront.net/react-app-1.json')
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
  }
};

loadRuntimeConfig().then(() => {
  if (window.location.hostname === 'localhost') {
    const link =
      (document.querySelector("link[rel~='icon']") as HTMLLinkElement) ||
      (document.createElement('link') as HTMLLinkElement);
    link.rel = 'icon';
    link.href = '/favicon-local.ico';
    document.head.appendChild(link);
  }

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<App />);
});
