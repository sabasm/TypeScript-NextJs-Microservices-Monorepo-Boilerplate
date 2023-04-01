/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Button from "../../components/Button";
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button onClick={() => { }}>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  //make a test of the button where it is passed the prop disabled and the button is disabled
  it('is disabled when passed the disabled prop', () => {
    const { getByText } = render(<Button onClick={() => { }} disabled>Click me</Button>);
    expect(getByText('Click me')).toBeDisabled();
  });
});
