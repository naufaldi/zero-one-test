import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('render card component', () => {
  render(
    <Card>
      <div>Halo</div>
    </Card>
  );
  screen.getByTestId('card-element');
});
