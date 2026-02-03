import { Current } from './types/current.js';
import { Daily } from './types/daily.js';
import { General } from './types/general.js';
import { Hourly } from './types/hourly.js';
import { Minutely } from './types/minutely.js';

export interface Interface {
  getCurrent: () => Promise<Current>;
  getDaily: () => Promise<Daily>;
  getGeneral: () => Promise<General>;
  getHourly: () => Promise<Hourly>;
  getMinutely: () => Promise<Minutely>;
}
