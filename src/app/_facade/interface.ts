import { OSMapLayer } from '~/libs/types';
import { Current } from '~/services/open-weather';

export interface Interface {
  getCurrentWeather: (lat: string, lon: string) => Promise<Current>;
  getMap: (layer: OSMapLayer) => string;
}
