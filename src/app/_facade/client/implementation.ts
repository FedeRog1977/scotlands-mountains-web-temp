import { OSMapLayer } from '~/libs/types';
import { OrdnanceSurveyService } from '~/services/ordnance-survey';
import { Interface } from '../interface.js';

type Config = {
  ordnanceSurveyService: OrdnanceSurveyService;
};

export class Implementation implements Interface {
  private readonly ordnanceSurveyService: OrdnanceSurveyService;

  public constructor(config: Config) {
    this.ordnanceSurveyService = config.ordnanceSurveyService;
  }

  public getMap(layer: OSMapLayer): string {
    return this.ordnanceSurveyService.getMap(layer);
  }
}
