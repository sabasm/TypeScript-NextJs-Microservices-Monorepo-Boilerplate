import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.background.secondary};
  grid-area: header;
  // Add your styles here

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    // Add styles for screens larger than the md breakpoint
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    // Add styles for screens larger than the lg breakpoint
  }
`;

/**
 * Header component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Content to be rendered within the header
 */
export default function Header({ children }: { children: React.ReactNode }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}
