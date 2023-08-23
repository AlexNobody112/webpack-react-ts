import { render } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';

describe('sidebar', () => {
  test('Sidebar test', () => {
    render(<Sidebar />);
  });
});
