import React from 'react';
import styled from 'styled-components';
import { flexColumnsCenterTop, minMaxPageLimits, flexColumnsCenterBottom } from '../themes/mixins';

const MainContentWrapper = styled.main`
  ${minMaxPageLimits};
  ${flexColumnsCenterTop};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
`;

interface HeaderProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: HeaderProps) {
  return <MainContentWrapper>{children}</MainContentWrapper>;
}
