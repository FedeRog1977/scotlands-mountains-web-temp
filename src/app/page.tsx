import { Metadata } from 'next';
import Link from 'next/link.js';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';

type SearchParams = {
  query: string;
};

export type HomeProps = {
  searchParams: Promise<SearchParams>;
};

export const generateMetadata = (): Metadata => ({
  title: "Scotland's Mountains | Home",
  description: "Scotland's Mountains Home Page",
  keywords: ['scotlands', 'mountains', 'home'],
});

const Home = async ({ searchParams }: HomeProps): Promise<ReactElement> => {
  const params = await searchParams;

  if (params.query) {
    redirect(params.query);
  }

  return (
    <div style={{ fontSize: '36px', textAlign: 'center' }}>
      <p>Scotland&rsquo;s Mountains v{process.env.APP_VERSION}</p>
      <p>
        {/* @ts-expect-error: This is fine */}
        <Link href="/conquest">Conquest</Link>
      </p>
      <p>
        {/* @ts-expect-error: This is fine */}
        <Link href="/weather">Mountain Weather</Link>
      </p>
      <p>
        {/* @ts-expect-error: This is fine */}
        <Link href="/districts">Districts</Link>
      </p>
      <p>
        {/* @ts-expect-error: This is fine */}
        <Link href="/regions">Regions</Link>
      </p>
      <p>
        {/* @ts-expect-error: This is fine */}
        <Link href="/landmasses">Landmasses</Link>
      </p>
      <p>
        {/* @ts-expect-error: This is fine */}
        <Link href="/hills">Hills</Link>
      </p>
      <p>
        {/* @ts-expect-error: This is fine */}
        <Link href="/gear">Gear</Link>
      </p>
    </div>
  );
};

export default Home;
