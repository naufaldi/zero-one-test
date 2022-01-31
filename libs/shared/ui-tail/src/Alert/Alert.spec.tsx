import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

test('render alert component', () => {
  render(
    <Alert variant="success" title="Success!">
      Login Successed!
    </Alert>
  );
  screen.getByText('Success!');
});
