import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from '@/components/Label';

describe('Label', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Label label="test" children={<></>} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    const { baseElement } = render(
      <Label label="test">
        <span>test</span>
      </Label>
    );
    expect(baseElement).toBeTruthy();
  });
});
