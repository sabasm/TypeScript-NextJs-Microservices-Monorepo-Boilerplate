import { sharedStyles } from '@/layouts/themes/globalSettings';
import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  label: string;
  children: React.ReactNode;
}

const Wrapper = styled.label`
  ${sharedStyles};
`;

const Label = ({ label, children, ...rest }: LabelProps) => (
  <Wrapper {...rest}>
    {label}
    {children}
  </Wrapper>
);

export default Label;
