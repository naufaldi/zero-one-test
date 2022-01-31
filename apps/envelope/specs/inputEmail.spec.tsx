import { render, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import FormLogin from '../components/login/FormLogin';

const setupEmail = () => {
  const utils = render(
    <RecoilRoot>
      <FormLogin />
    </RecoilRoot>
  );
  const input = utils.getByLabelText('Email') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test('render email input ', () => {
  const { input } = setupEmail();
  expect(input).toBeTruthy();
});

test('It should always email', () => {
  const { input } = setupEmail();
  fireEvent.change(input, { target: { value: 'naufaldi.rafif@gmail.com' } });
  expect(input.value).toBe('naufaldi.rafif@gmail.com');
});
test('It should required email', () => {
  const { input } = setupEmail();
  expect(input).toHaveValue('');
  expect(input).toHaveAttribute('required');
});
