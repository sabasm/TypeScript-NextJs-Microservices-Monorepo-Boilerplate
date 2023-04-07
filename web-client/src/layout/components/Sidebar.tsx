import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
    flex-grow:1;
`;

/**
 * Sidebar component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Content to be rendered within the sidebar
 */
export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <SidebarWrapper>{children}</SidebarWrapper>;
}
