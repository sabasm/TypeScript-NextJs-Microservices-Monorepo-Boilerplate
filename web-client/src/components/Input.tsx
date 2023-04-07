import { sharedStyles } from '@/layouts/themes/globalSettings';
import React from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import { mockOnChange } from './mockFunctions/inputs';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField = styled.input`
  ${sharedStyles};
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
`;

const Input = ({ label, onChange = mockOnChange, ...rest }: InputProps) => (
  <InputWrapper label={label}>
    <InputField onChange={onChange} {...rest} />
  </InputWrapper>
);

export default Input;
