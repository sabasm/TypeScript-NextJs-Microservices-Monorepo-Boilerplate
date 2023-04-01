import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
   background-color:${props => props.theme.colors.background.quinary};
    flex-grow:1;
   /* flex-basis:${100 / 3}%;
   order:-1;
   padding-left:${(100 / 3) / 2}%;
   padding-right:${(100 / 3) / 2}%; */

   /* @media(min-width:${({ theme: { breakpoints: { md } } }) => md}){
      flex-basis:auto;
      order:-1;
      padding-left:${(100 / 3) / 2}%;
      padding-right:${(100 / 3) / 2}%;
   } */
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
