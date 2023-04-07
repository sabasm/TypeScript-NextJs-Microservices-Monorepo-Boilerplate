import { sharedStyles } from '@/layout/themes/globalSettings';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Label from './Label';

export interface InputWrapperProps {
  children: ReactNode;
  label?: string;
}

const Wrapper = styled.div`
  ${sharedStyles};
`;

const InputWithLabel = (
  label: string,
  children: ReactNode
): ReactNode => (
  <Label label={label}>
    {children}
  </Label>
);

const InputWrapper = ({ children, label = undefined }: InputWrapperProps) => (
  <Wrapper>
    {label ? InputWithLabel(label, children) : children}
  </Wrapper>
);

export default InputWrapper;
