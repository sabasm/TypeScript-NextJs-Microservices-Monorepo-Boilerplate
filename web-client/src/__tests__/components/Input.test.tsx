import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '@/components/Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<Input label="Test Label" />);
    expect(getByLabelText('Test Label')).toBeInTheDocument();
  });
});
