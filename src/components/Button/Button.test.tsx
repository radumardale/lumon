import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('renders with label', () => {
    render(<Button label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button label="Nope" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
