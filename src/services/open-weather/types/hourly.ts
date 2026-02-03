import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Weather = {
  main: string;
  description: string;
  icon: IconDefinition;
};

export type Hourly = {
  dt: number;
  temperature: number;
  temperatureFeelsLike: number;
  pressure: number;
  humidity: number;
  dewPoint: number;
  ultravioletIndex: number;
  cloudCover: number;
  visibility: number;
  windSpeed: number;
  windGust: number;
  windDirection: number;
  weather: Weather[];
  rainfallProbability: number;
  inversionProbability: number;
};
