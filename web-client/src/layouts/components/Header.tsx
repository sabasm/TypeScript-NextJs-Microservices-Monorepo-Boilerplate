import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
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
