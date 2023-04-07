import React from 'react';
import { render } from '@testing-library/react';
import { Sidebar } from '@/layout/components';

describe('Sidebar', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <Sidebar left>
        <h1>Test sidebar</h1>
      </Sidebar>
    );
    expect(getByText('Test sidebar')).toBeInTheDocument();
  });

  it('renders with a left prop', () => {
    const { getByTestId } = render(<Sidebar left children={<></>} />);
    expect(getByTestId('sidebar')).toHaveStyle('flex: 3');
  });

  it('renders without a left prop', () => {
    const { getByTestId } = render(<Sidebar children={<></>} />);
    expect(getByTestId('sidebar')).toHaveStyle('flex: 4');
  });
});
