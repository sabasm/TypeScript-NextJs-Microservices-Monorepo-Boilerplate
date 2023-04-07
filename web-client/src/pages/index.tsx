import React from 'react';
import Link from 'next/link';
import { Hero } from '@/layout/components';

const Home = () => {
  return (
    <Hero>
      <h1>Homepage</h1>
      <h2>this is an h2</h2>
      <Link href="/test">Go to Test page</Link>
    </Hero>
  );
};

export default Home;
