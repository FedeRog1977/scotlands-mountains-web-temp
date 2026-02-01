'use client';

import { FC } from 'react';
import { OSMap } from './components/os-map.jsx';

export type ConquestMapTemplateProps = {
  mapUrl: string;
};

export const ConquestMapTemplate: FC<ConquestMapTemplateProps> = ({ mapUrl }) => (
  <OSMap mapUrl={mapUrl} />
);
