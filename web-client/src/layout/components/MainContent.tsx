import React from 'react';
import styled from 'styled-components';
import { flexColumnsCenterTop, minMaxPageLimits } from '../themes/mixins';

const MainContentWrapper = styled.main`
  ${flexColumnsCenterTop};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  flex: 8;
  height: 100%;
`;

interface HeaderProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: HeaderProps) {
  return <MainContentWrapper>{children}</MainContentWrapper>;
}
