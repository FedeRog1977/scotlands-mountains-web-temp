import { Metadata } from 'next';
import { ReactElement } from 'react';
import { facade } from './_facade/index.js';
import { ConquestMapTemplate } from './_ui/templates/conquest-map-template/conquest-map-template.jsx';

type SearchParams = {
  query: string;
};

export type TestPageProps = {
  searchParams: Promise<SearchParams>;
};

export const generateMetadata = (): Metadata => ({
  title: "Scotland's Mountains | Conquest Map",
  description: "Scotland's Mountains Conquest Map Page",
  keywords: ['scotlands', 'mountains', 'conquest', 'map', 'ordnance', 'survey'],
});

const Test = async ({ searchParams }: TestPageProps): Promise<ReactElement> => {
  const params = await searchParams;
  // eslint-disable-next-line no-console
  console.log('Search Params:', params);

  // TODO: expose options to UI
  const mapUrl = facade.getMap('Leisure_27700');

  return <ConquestMapTemplate mapUrl={mapUrl} />;
};

export default Test;
