import { isLoadingRuntimeVar } from '../application.config';

export function App() {
  return (
    <div>
      <p>Build time var: {import.meta.env.VITE_TEST_VAR}</p>
      <p>Runtime var: {window.__RUNTIME_CONFIG__?.TEST_RUNTIME_VAR}</p>
      <p>is loading runtime env: {isLoadingRuntimeVar}</p>
    </div>
  );
}

export default App;
