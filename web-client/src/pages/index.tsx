import React from 'react';
import Link from 'next/link';
import { Hero } from '@/layout/components';
import { PRIVATE_PAGES as Page } from '@/lib/constants';

const Home = () => {
  return (
    <Hero>
      <h1>Homepage</h1>
      <h2>this is an h2</h2>
      <Link href={Page.Test}>Go to Test page</Link>
    </Hero>
  );
};

export default Home;
