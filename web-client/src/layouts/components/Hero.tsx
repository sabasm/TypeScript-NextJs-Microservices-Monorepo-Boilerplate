import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: calc(100vh);
`;

/**
* Hero section component for full-screen hero section in HeroLayout.
*
* @param {Object} props - Component properties
* @param {React.ReactNode} props.children - Content to be rendered within the hero section
*/

export default function Hero({ children }: { children: React.ReactNode }) {
  return <HeroSection className='hero-layout'>{children}</HeroSection>;
}
