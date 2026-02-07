'use client';

import { FC } from 'react';
import { Header } from '~/libs/components/header';
import { OSMap } from './components/os-map.js';

export type ConquestMapTemplateProps = {
  mapUrl: string;
  appVersion: string;
};

export const ConquestMapTemplate: FC<ConquestMapTemplateProps> = ({ mapUrl, appVersion }) => (
  <>
    <Header variant="layered" appVersion={appVersion} />

    <OSMap mapUrl={mapUrl} />
  </>
);
