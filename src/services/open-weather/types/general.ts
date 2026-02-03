import { WeatherResponse } from './weather-response.js';

export type General = Pick<WeatherResponse, 'lat' | 'lon' | 'timezone'> & {
  timezoneOffset: number;
};
