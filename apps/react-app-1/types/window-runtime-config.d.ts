declare global {
  interface Window {
    __RUNTIME_CONFIG__?: {
      TEST_RUNTIME_VAR?: string;
    };
  }
}

export {};
