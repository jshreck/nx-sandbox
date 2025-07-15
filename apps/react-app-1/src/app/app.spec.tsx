import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

declare const window: Window & typeof globalThis;

describe('App', () => {
  const originalRuntimeConfig = window.__RUNTIME_CONFIG__;

  beforeEach(() => {
    window.__RUNTIME_CONFIG__ = { TEST_RUNTIME_VAR: 'mocked value' };
  });

  afterEach(() => {
    window.__RUNTIME_CONFIG__ = originalRuntimeConfig;
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      getAllByText(new RegExp('Welcome react-app-1')).length > 0
    ).toBeTruthy();
  });
});
