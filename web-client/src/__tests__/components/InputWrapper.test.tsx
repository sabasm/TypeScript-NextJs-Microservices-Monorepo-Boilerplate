import React from 'react';
import { render, screen } from '@testing-library/react';
import InputWrapper from '@/components/InputWrapper';

describe('InputWrapper', () => {
  it('renders without label', () => {
    render(<InputWrapper>Test input</InputWrapper>);
    const input = screen.getByText('Test input');
    expect(input).toBeInTheDocument();
  });
});
