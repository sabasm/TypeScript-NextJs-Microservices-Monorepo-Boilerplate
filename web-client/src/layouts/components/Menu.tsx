import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
background-color:${({ theme: { colors: { extra: { primary } } } }) => primary};
/* grid-area:menu; */

@media(min-width:${({ theme: { breakpoints: { md } } }) => md}){
display:none;
}
`;

/**
 * Menu component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Content to be rendered within the menu
 */
export default function Menu({ children }: { children: React.ReactNode }) {
  return <MenuWrapper>{children}</MenuWrapper>;
}
