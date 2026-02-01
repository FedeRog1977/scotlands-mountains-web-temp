'use client';

// https://stackoverflow.com/questions/40365440/react-leaflet-map-not-correctly-displayed

import 'proj4leaflet';
import React, { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Proj } from 'leaflet';

type OSMapComponentProps = {
  mapUrl: string;
};

const OSMapComponent: FC<OSMapComponentProps> = ({ mapUrl }) => {
  const crs = mapUrl.includes('Leisure_27700')
    ? new Proj.CRS(
        'EPSG:27700',
        `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717
        +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,
        -125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs`,
        {
          resolutions: [896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75],
          origin: [-238375, 1376256],
        },
      )
    : undefined;

  return (
    <MapContainer
      // center={[51.505, -0.09]}
      zoom={13}
      // crs={crs}
      style={{ height: '100vh', width: '100wh' }}
      // center={[205685, 755842]}
      minZoom={5}
      maxZoom={20}
      // maxBounds={[
      //   [-238375, 0],
      //   [900000, 1376256],
      // ]}
      attributionControl={false}
      // zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        url={mapUrl}
        attribution='&copy; <a href="https://docs.os.uk/os-apis/accessing-os-apis/os-maps-api">Ordnance Survey</a> contributors'
      />
    </MapContainer>
  );
};

export default OSMapComponent;
