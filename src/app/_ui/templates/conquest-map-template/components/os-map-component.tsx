'use client';

import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { getMapContainerProps } from './get-map-container-props.js';

type OSMapComponentProps = {
  mapUrl: string;
};

const OSMapComponent: FC<OSMapComponentProps> = ({ mapUrl }) => {
  const isEPSG27700 = mapUrl.includes('Leisure_27700');
  const mapContainerProps = getMapContainerProps(isEPSG27700);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MapContainer {...mapContainerProps}>
      <TileLayer
        url={mapUrl}
        attribution='&copy; <a href="https://docs.os.uk/os-apis/accessing-os-apis/os-maps-api">Ordnance Survey</a> contributors'
      />
    </MapContainer>
  );
};

export default OSMapComponent;
