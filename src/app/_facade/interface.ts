import { OSMapLayer } from '~/libs/types';

export interface Interface {
  getMap: (layer: OSMapLayer) => string;
}
