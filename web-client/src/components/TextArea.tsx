import { sharedStyles } from '../layout/themes/globalSettings';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { mockOnChange } from '../../__mocks__/inputs';
import InputWrapper from './InputWrapper';

const TextAreaStyle = styled.textarea`
  ${sharedStyles};
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: none;
`;

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ label, onChange = mockOnChange, ...rest }: TextAreaProps) => (
  <InputWrapper label={label}>
    <TextAreaStyle onChange={onChange} {...rest} />
  </InputWrapper>
);

export default TextArea;
