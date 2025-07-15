// Global Jest setup for react-app-1
// You can mock window.__RUNTIME_CONFIG__ or other globals here

Object.defineProperty(window, '__RUNTIME_CONFIG__', {
  writable: true,
  value: {},
});
