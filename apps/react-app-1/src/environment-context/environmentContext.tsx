import { createContext, useContext } from 'react';
import { EnvironmentContextType, EnvironmentConfig } from './types';

const defaultConfig: EnvironmentConfig = {
  isUsingRuntimeEnvVar: false,
};

export const EnvironmentContext = createContext<EnvironmentContextType>({
  config: defaultConfig,
});

export const useEnvironmentContext = () => {
  const context = useContext(EnvironmentContext);
  if (context === undefined) {
    throw new Error(
      'useEnvironmentContext must be used within an EnvironmentContext.Provider'
    );
  }
  return context;
};
