import { isLoadingRuntimeVar, isLoadingBuildEnv } from '../application.config';
import { useEnvironmentContext } from '../environment-context/environmentContext';

const TestEnvVariables = () => {
  const { config } = useEnvironmentContext();
  return (
    <div>
      <h3>Build time var:</h3>
      <p>Build time var (direct access): {process.env.VITE_TEST_VAR}</p>
      <p>
        is loading build env var (application.config):{' '}
        {isLoadingBuildEnv.toString()}
      </p>
      <h3>Runtime var:</h3>
      <p>
        Runtime var (direct access):{' '}
        {window.__RUNTIME_CONFIG__?.TEST_RUNTIME_VAR}
      </p>
      <p>
        is loading runtime env var (application.config):{' '}
        {isLoadingRuntimeVar().toString()}
      </p>

      <p>
        is using runtime env var (from EnvironmentContext):{' '}
        {config.isUsingRuntimeEnvVar.toString()}
      </p>
    </div>
  );
};

export { TestEnvVariables };
