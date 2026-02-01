import { Interface } from '../interface.js';
import { mockMap } from './data/mock-map.js';

export class Implementation implements Interface {
  public getMap(): string {
    return mockMap;
  }
}
