export function mockHandleClick(): void {
  console.log('clicked (mock function)');
}

export function mockOnChange(input: any): void {
  console.log('on changed (mock function)');
  console.log(input);
}

export function mockOnSubmit(): void {
  console.log('submitted (mock function)');
}

export function mockOnSubmitWithEvent(event: React.FormEvent<HTMLFormElement>): void {
  console.log('submitted with event (mock function)');
  event.preventDefault();
}

export function mockOnSubmitWithEventAndValue(
  event: React.FormEvent<HTMLFormElement>,
  value: string
): void {
  console.log('submitted with event and value (mock function)');
  console.log(value);
  event.preventDefault();
}

