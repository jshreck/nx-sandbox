interface EnvironmentConfig {
  isUsingRuntimeEnvVar: boolean;
}

interface EnvironmentContextType {
  config: EnvironmentConfig;
}

export type { EnvironmentContextType, EnvironmentConfig };
