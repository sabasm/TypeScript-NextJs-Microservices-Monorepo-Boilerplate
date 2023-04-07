import React from 'react';
import styled from 'styled-components';
import { flexColumnsCenterTop, minMaxPageLimits } from '../themes/mixins';

export interface SidebarWrapperProps {
  children: React.ReactNode;
  left?: boolean;
}

const SidebarWrapper = styled.aside<SidebarWrapperProps>`
  ${flexColumnsCenterTop}

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.left ? 'none' : 'block')};
  }

  //media to not show sidebar on mobile when screen is 720px or less
  @media screen and (max-width: 720px) {
    display: none;
  }

  background-color: ${(props) => (props.left ? 'rgb(129, 89, 89)' : 'rgb(60, 59, 59)')};
  flex: ${(props) => (props.left ? '3' : '4')};
  height: 100%;
`;

/**
 * Sidebar component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Content to be rendered within the sidebar
 */
export default function Sidebar({ children, left, ...rest }: SidebarWrapperProps) {
  return (
    <SidebarWrapper data-testid="sidebar" left={left} {...rest}>
      {children}
    </SidebarWrapper>
  );
}
