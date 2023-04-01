import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import styled from 'styled-components';

interface HeroLayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  hero?: React.ReactNode;
}

/**
* Layout for pages with a full-screen hero section.
*
* The layout structure is as follows:
*   <header>
*   <hero>
*   <maincontent>
*   <footer>
*/
const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'content content content'
    'footer footer footer';
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-gap: 1rem;
  height: 100vh;
  width: 100vw;
  @media (min-width: ${({ theme: { breakpoints: { md } } }) => md}) {
    grid-template-areas:
      'header header header'
      'menu content sidebar'
      'footer footer footer';
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 4fr 1fr;
  }
  @media (min-width: ${({ theme: { breakpoints: { lg } } }) => lg}) {
    grid-template-areas:
      'header header header'
      'menu content sidebar'
      'footer footer footer';
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 4fr 1fr;
  }

  @media (min-width: ${({ theme: { breakpoints: { xl } } }) => xl}) {
    grid-template-areas:
      'header header header'
      'menu content sidebar'
      'footer footer footer';
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 4fr 1fr;
  }
`;
export default function HeroLayout({
  children,
  footer,
  hero
}: HeroLayoutProps) {
  return (
    <Layout>
      <Hero>{hero}</Hero>
      <MainContent>{children}</MainContent>
      <Footer>{footer}</Footer>
    </Layout>
  );
}
