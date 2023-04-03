import React from 'react';
import styled from 'styled-components';

const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  `;

interface HeaderProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: HeaderProps) {
  return <MainContentWrapper>{children}</MainContentWrapper>;
}
