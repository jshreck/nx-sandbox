const isLoadingRuntimeVar = () =>
  window.__RUNTIME_CONFIG__?.TEST_RUNTIME_VAR === 'runtime';

const isLoadingBuildEnv = !!process.env.VITE_TEST_VAR;

export { isLoadingRuntimeVar, isLoadingBuildEnv };
