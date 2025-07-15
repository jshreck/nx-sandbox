type HostedConfig = {
  TEST_RUNTIME_VAR: 'runtime';
};

const isHostedConfig = (obj: unknown): obj is HostedConfig => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as Record<string, unknown>).TEST_RUNTIME_VAR === 'string'
  );
};

export type { HostedConfig };
export { isHostedConfig };
