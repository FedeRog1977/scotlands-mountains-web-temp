'use client';

// https://github.com/PaulLeCam/react-leaflet/issues/956
// https://stackoverflow.com/questions/70297328/passing-props-to-dynamic-component-in-nextjs

import dynamic from 'next/dynamic.js';
import { FC } from 'react';

type OSMapProps = {
  mapUrl: string;
};

// @ts-expect-error: False `dynamic` error
const OSMap: FC<OSMapProps> = dynamic(() => import('./os-map-component.jsx'), {
  ssr: false,
});

export { OSMap };
