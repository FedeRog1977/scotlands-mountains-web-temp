'use client';

import { FC } from 'react';
import { OSMap } from './components/os-map.jsx';

export type ConquestMapTemplateProps = {
  mapUrl: string;
  appVersion: string;
};

export const ConquestMapTemplate: FC<ConquestMapTemplateProps> = ({ mapUrl, appVersion }) => (
  <>
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: '2000',
        height: '8vh',
        width: '100vw',
        backdropFilter: 'saturate(180%) blur(10px)',
        // paddingLeft: '36px',
        // paddingRight: '36px',
        // border: '1px solid black',
      }}
    >
      <div
        style={{
          fontSize: '36px',
          marginLeft: '36px',
          // border: '1px solid black',
        }}
      >
        Scotland&rsquo;s Mountains v{appVersion}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          columnGap: '20px',
          fontSize: '20px',
          marginRight: '36px',
          // border: '1px solid black',
        }}
      >
        <a href="/">Home</a>
        <a href="/conquest">Conquest</a>
        <a href="/weather">Weather</a>
        <a href="/districts">Districts</a>
        <a href="/regions">Regions</a>
        <a href="/landmasses">Landmasses</a>
        <a href="/hills">Hills</a>
        <a href="/gear">Gear</a>
      </div>
    </header>
    <OSMap mapUrl={mapUrl} />
  </>
);
