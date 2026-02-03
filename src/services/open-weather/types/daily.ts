import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Weather = {
  main: string;
  description: string;
  icon: IconDefinition;
};

export type Daily = {
  dateTime: number;
  sunrise: number;
  sunset: number;
  temperature: {
    minimum: number;
    maximum: number;
    day: number;
    night: number;
    evening: number;
    morning: number;
  };
  temperatureFeelsLike: {
    day: number;
    night: number;
    evening: number;
    morning: number;
  };
  pressure: number;
  humidity: number;
  dewPoint: number;
  windSpeed: number;
  windDirection: number;
  weather: Weather[];
  cloudCover: number;
  rainfallProbability: number;
  rainfallAmount: number;
  ultravioletIndex: number;
  inversionProbability: number;
};
