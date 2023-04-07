import Home from '@/pages/index';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('renders the homepage', () => {
    const { getByText } = render(<Home />);
    const heading = getByText('Homepage');
    const subheading = getByText('this is an h2');
    const link = getByText('Go to Test page');

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
