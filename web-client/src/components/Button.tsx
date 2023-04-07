import { sharedStyles } from '@/layout/themes/globalSettings';
import React from 'react';
import styled from 'styled-components';
import { mockHandleClick } from '../../__mocks__/inputs';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const ButtonStyle = styled.button`
  ${sharedStyles};
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
`;

const Button = ({ children, onClick = mockHandleClick, ...rest }: ButtonProps) => (
  <ButtonStyle onClick={onClick} {...rest}>
    {children}
  </ButtonStyle>
);

export default Button;
