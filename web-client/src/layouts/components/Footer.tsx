import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
   background-color: ${props => props.theme.colors.background.primary};
   grid-area: footer;
  // Add your styles here

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    // Add styles for screens larger than the md breakpoint
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    // Add styles for screens larger than the lg breakpoint
  }
`;

/**
 * Footer component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Content to be rendered within the footer
 */
export default function Footer({ children }: { children: React.ReactNode }) {
  return <FooterWrapper>{children}</FooterWrapper>;
}
