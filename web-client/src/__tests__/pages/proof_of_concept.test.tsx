import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponentsPage from '@/pages/proof_of_concept';

describe('testComponentsPage', () => {
  it('should render without error', () => {
    render(<TestComponentsPage />);
    expect(screen.getByText('Homepage')).toBeInTheDocument();
  });
});
