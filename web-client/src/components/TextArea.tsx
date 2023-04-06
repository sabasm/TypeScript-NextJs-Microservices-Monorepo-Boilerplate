import { sharedStyles } from './../layouts/themes/globalSettings';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { mockOnChange } from './mockFunctions/inputs';

const TextAreaStyle = styled.textarea`
  ${sharedStyles};
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: none;
`;

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ onChange = mockOnChange, ...rest }: TextAreaProps) => (
  <TextAreaStyle onChange={onChange} {...rest} />
);

export default TextArea;
