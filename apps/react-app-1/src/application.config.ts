const isLoadingRuntimeVar = Boolean(
  window.__RUNTIME_CONFIG__?.TEST_RUNTIME_VAR
).toString();

export { isLoadingRuntimeVar };
