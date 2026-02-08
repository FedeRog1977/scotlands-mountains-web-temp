import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Weather = {
  main: string;
  description: string;
  icon: IconDefinition;
};

export type Current = {
  dateTime: string;
  sunrise: string;
  sunset: string;
  temperature: string;
  temperatureFeelsLike: string;
  pressure: string;
  humidity: string;
  dewPoint: string;
  ultravioletIndex: string;
  cloudCover: string;
  visibility: string;
  windSpeed: string;
  windGust?: string;
  windDirection: string;
  weather: Weather[];
  inversionProbability: string;
};
