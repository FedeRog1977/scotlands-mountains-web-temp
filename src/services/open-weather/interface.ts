import { Current } from './types/current.js';
import { Daily } from './types/daily.js';
import { General } from './types/general.js';
import { Hourly } from './types/hourly.js';
import { Minutely } from './types/minutely.js';

export interface Interface {
  getCurrent: (lat: string, lon: string) => Promise<Current>;
  getDaily: (lat: string, lon: string) => Promise<Daily>;
  getGeneral: (lat: string, lon: string) => Promise<General>;
  getHourly: (lat: string, lon: string) => Promise<Hourly>;
  getMinutely: (lat: string, lon: string) => Promise<Minutely>;
}
