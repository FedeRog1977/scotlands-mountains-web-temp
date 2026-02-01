import { ENV, SemanticVersion } from '~/libs/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: ENV;
      APP_VERSION: SemanticVersion;
      OS_API_KEY: string;
    }
  }
}
