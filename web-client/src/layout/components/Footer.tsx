import React from 'react';
import styled from 'styled-components';
import { flexColumnsCenterCenter } from '../themes/mixins';

const FooterWrapper = styled.footer`
  ${flexColumnsCenterCenter};
  color: ${({ theme }) => theme.primaryColor};
  height: 10rem;
  /* width: 100%; */
  background-color: black;
`;

/**
 * Footer component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Content to be rendered within the footer
 */
export default function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <FooterWrapper>
      {children ?? children}
      <span>This is the footer section</span>
    </FooterWrapper>
  );
}
