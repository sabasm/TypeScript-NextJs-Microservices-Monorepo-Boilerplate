import Home from '@/pages/index';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('renders the homepage', () => {
    const { getByText } = render(<Home />);
    const link = getByText('Go to Test page');
    expect(link).toBeInTheDocument();
  });
});
