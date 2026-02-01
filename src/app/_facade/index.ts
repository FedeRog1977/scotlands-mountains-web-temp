// import { ValidatorAjv } from '~/services/validator-ajv';
import { baseUrls } from '~/libs/constants';
import { OrdnanceSurveyServiceClient } from '~/services/ordnance-survey';
import { Implementation as ImplementationClient } from './client/implementation.js';
import { Interface } from './interface.js';
import { Implementation as ImplementationTest } from './test/implementation.js';

const getFacade = (): Interface => {
  if (process.env.APP_ENV === 'local') {
    return new ImplementationTest();
  }

  // const validatorAjv = new ValidatorAjv();
  const ordnanceSurveyServiceClient = new OrdnanceSurveyServiceClient({
    baseUrl: baseUrls.ordnanceSurvey,
    apiKey: process.env.OS_API_KEY,
    // validator: validatorAjv,
  });

  return new ImplementationClient({ ordnanceSurveyService: ordnanceSurveyServiceClient });
};

/**
 * If I ever care to skip build time environment variables,
 * this must only be invoked server-side, not here
 */
export const facade = getFacade();
