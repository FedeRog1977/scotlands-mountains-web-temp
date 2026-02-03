/* eslint-disable no-console */

import fetch from 'node-fetch';
import { Validator } from '~/services/validator-ajv';
import { weatherResponseValidationSchema } from './constants/weather-response-validation-schema.js';
import { Interface } from './interface.js';
import { Current } from './types/current.js';
import { Daily } from './types/daily.js';
import { General } from './types/general.js';
import { Hourly } from './types/hourly.js';
import { Minutely } from './types/minutely.js';

type Config = {
  baseUrl: string;
  apiKey: string;
  validator: Validator;
};
export class Implementation implements Interface {
  private readonly baseUrl: string;

  private readonly apiKey: string;

  private readonly validator: Validator;

  public constructor(config: Config) {
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;
    this.validator = config.validator;
  }

  private get weatherUrl(): string {
    return `${this.baseUrl}?lat=:lat&lon=:lon&appid=${this.apiKey}&units=metric`;
  }

  public async getCurrent(lat: string, lon: string): Promise<Current> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      // TODO: this is incorrect, map to return type
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return validResponseData.current as unknown as Current;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid current weather data received');
    }
  }

  public async getDaily(lat: string, lon: string): Promise<Daily> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      // TODO: this is incorrect, map to return type
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return validResponseData.daily as unknown as Daily;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid daily weather data received');
    }
  }

  public async getGeneral(lat: string, lon: string): Promise<General> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      return {
        lat: validResponseData.lat,
        lon: validResponseData.lon,
        timezone: validResponseData.timezone,
        timezoneOffset: validResponseData.timezone_offset,
      };
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid general weather data received');
    }
  }

  public async getHourly(lat: string, lon: string): Promise<Hourly> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      // TODO: this is incorrect, map to return type
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return validResponseData.hourly as unknown as Hourly;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid hourly weather data received');
    }
  }

  public async getMinutely(lat: string, lon: string): Promise<Minutely> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      // TODO: this is incorrect, map to return type
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return validResponseData.minutely as unknown as Minutely;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid minutely weather data received');
    }
  }
}
