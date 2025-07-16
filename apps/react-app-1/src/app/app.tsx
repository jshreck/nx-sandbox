import { TestEnvVariables } from '../components/testEnvVariables';
import { EnvironmentContext } from '../environment-context/environmentContext';
import { HostedConfig } from '@libs/configs';

export function App() {
  const config = window.__RUNTIME_CONFIG__ as HostedConfig;

  if (!config) {
    return <p> App is down</p>;
  }

  return (
    <EnvironmentContext.Provider
      value={{ config: { isUsingRuntimeEnvVar: !!config.TEST_RUNTIME_VAR } }}
    >
      <h1>Welcome react-app-1</h1>
      <TestEnvVariables />
    </EnvironmentContext.Provider>
  );
}

export default App;
