import React from 'react';
import { render } from '@testing-library/react';
import TextArea from '@/components/TextArea';

describe('TextArea', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<TextArea label="Test label" />);
    expect(getByLabelText('Test label')).toBeInTheDocument();
  });
});
