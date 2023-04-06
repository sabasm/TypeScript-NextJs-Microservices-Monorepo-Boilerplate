import { sharedStyles } from '@/layouts/themes/globalSettings';
import React from 'react';
import styled from 'styled-components';


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputWrapper = styled.div`
  ${sharedStyles};
`;

const InputField = styled.input`
  ${sharedStyles};
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
`;

const Input = ({ label, ...rest }: InputProps) => (
  <InputWrapper>
    {label && <label>{label}</label>}
    <InputField {...rest} />
  </InputWrapper>
);

export default Input;
