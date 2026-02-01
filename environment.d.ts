import { ENV } from '~/libs/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: ENV;
      OS_API_KEY: string;
    }
  }
}
