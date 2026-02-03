import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Weather = {
  main: string;
  description: string;
  icon: IconDefinition;
};

export type Current = {
  dateTime: number;
  sunrise: number;
  sunset: number;
  temperature: number;
  temperatureFeelsLike: number;
  pressure: number;
  humidity: number;
  dewPoint: number;
  ultravioletIndex: number;
  cloudCover: number;
  visibility: number;
  windSpeed: number;
  windDirection: number;
  windGust: number;
  weather: Weather[];
  inversionProbability: number;
};
