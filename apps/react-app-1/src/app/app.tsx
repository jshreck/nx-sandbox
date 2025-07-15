import { TestEnvVariables } from '../components/testEnvVariables';
import { EnvironmentContext } from '../environment-context/environmentContext';
import { HostedConfig } from '../types/hostedConfig';

export function App() {
  const config = window.__RUNTIME_CONFIG__ as HostedConfig;

  if (!config) {
    return <p> App is down</p>;
  }

  return (
    <EnvironmentContext.Provider
      value={{ config: { isUsingRuntimeEnvVar: !!config.TEST_RUNTIME_VAR } }}
    >
      <TestEnvVariables />
    </EnvironmentContext.Provider>
  );
}

export default App;
