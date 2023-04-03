import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
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
