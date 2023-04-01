import React from 'react';
import styled from 'styled-components';

const MainContentWrapper = styled.main`
  background-color: ${props => props.theme.colors.background.quaternary};
  flex-grow:2;
  /* grid-area: mainContent; */
  // Add your styles here

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    // Add styles for screens larger than the md breakpoint
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    // Add styles for screens larger than the lg breakpoint
   }
`;

interface HeaderProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: HeaderProps) {
  return <MainContentWrapper>{children}</MainContentWrapper>;
}
