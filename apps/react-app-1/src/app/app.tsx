import { isLoadingRuntimeVar } from '../application.config';

export function App() {
  return (
    <div>
      <h1>Welcome react-app-1</h1>
      <p>Build time var: {process.env.VITE_TEST_VAR}</p>
      <p>Runtime var: {window.__RUNTIME_CONFIG__?.TEST_RUNTIME_VAR}</p>
      <p>is loading runtime env: {isLoadingRuntimeVar}</p>
    </div>
  );
}

export default App;
