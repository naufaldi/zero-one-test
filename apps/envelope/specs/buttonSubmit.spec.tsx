import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import FormLogin from '../components/login/FormLogin';

const setupSubmit = () => {
  const utils = render(
    <RecoilRoot>
      <FormLogin />
    </RecoilRoot>
  );
  const button = screen.getByRole('button', {
    name: /Sign In/i,
  }) as HTMLButtonElement;
  return {
    button,
    ...utils,
  };
};

test('render button sign in', () => {
  const { button } = setupSubmit();
  expect(button).toBeTruthy();
});
