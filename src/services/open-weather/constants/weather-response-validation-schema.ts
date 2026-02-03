import { JSONSchema } from '~/libs/types';
import { WeatherResponse } from '../types/weather-response.js';

export const weatherResponseValidationSchema: JSONSchema<WeatherResponse> = {
  type: 'object',
  properties: {},
  required: [],
};
