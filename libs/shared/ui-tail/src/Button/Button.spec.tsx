import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('render button component', () => {
  render(<Button variant="primary">Halo</Button>);
  screen.getByRole('button', { name: /Halo/i });
});
