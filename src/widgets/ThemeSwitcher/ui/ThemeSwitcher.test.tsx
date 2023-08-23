import { render, screen } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
  test('render ThemeSwitcher', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId('THEME_SWITCHER')).toBeInTheDocument();
  });

  test('test has btn', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
