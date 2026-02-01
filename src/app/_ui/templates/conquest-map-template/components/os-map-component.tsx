'use client';

// https://stackoverflow.com/questions/40365440/react-leaflet-map-not-correctly-displayed

import 'proj4leaflet';
import proj4 from 'proj4';
import { CSSProperties, FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple, Proj } from 'leaflet';

type OSMapComponentProps = {
  mapUrl: string;
};

// TODO: extract!
const projectCoordinates = (coordinates: number[]): unknown => {
  proj4.defs(
    'EPSG:27700',
    `+proj=tmerc
        +lat_0=49
        +lon_0=-2
        +k=0.9996012717
        +x_0=400000
        +y_0=-100000
        +ellps=airy
        +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
        +units=m
        +no_defs`,
  );

  const projectedCoordinates = proj4('EPSG:27700', 'EPSG:4326', coordinates).reverse();

  return projectedCoordinates;
};

const OSMapComponent: FC<OSMapComponentProps> = ({ mapUrl }) => {
  const isEPSG27700 = mapUrl.includes('Leisure_27700');

  const crs = isEPSG27700
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
  const center: LatLngExpression = isEPSG27700
    ? (projectCoordinates([205685, 755842]) as LatLngExpression)
    : [56.6539, -5.1715];
  const styles: CSSProperties = { height: '100vh', width: '100vw' };
  const zoom = 10;
  const maxBounds = isEPSG27700
    ? [
        projectCoordinates([-238375, 0]) as LatLngTuple,
        projectCoordinates([900000, 1376256]) as LatLngTuple,
      ]
    : undefined;

  return (
    <MapContainer
      crs={crs}
      center={center}
      zoom={zoom}
      style={styles}
      minZoom={0}
      maxZoom={9}
      maxBounds={maxBounds}
      attributionControl={false}
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
