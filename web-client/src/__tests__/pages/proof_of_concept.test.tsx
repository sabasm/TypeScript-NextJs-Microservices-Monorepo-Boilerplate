import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponentsPage from '@/pages/proof_of_concept';

describe('TestComponentsPage', () => {
  test('renders page with components', () => {
    const { getByText, getByLabelText } = render(<TestComponentsPage />);
    const buttonElement = getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
    const inputElement = getByLabelText(/name/i);
    expect(inputElement).toBeInTheDocument();
    const textAreaElement = getByLabelText(/description/i);
    expect(textAreaElement).toBeInTheDocument();
  });
});
