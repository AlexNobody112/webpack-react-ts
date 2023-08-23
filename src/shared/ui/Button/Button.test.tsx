import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('Button component', () => {
  test('with text children', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('with text children and theme className', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
