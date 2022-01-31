import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import FormLogin from '../components/login/FormLogin';
import userEvent from '@testing-library/user-event';

const setupPassword = () => {
  const utils = render(
    <RecoilRoot>
      <FormLogin />
    </RecoilRoot>
  );
  const input = utils.getByLabelText('Password') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test('render Password input ', () => {
  const { input } = setupPassword();
  expect(input).toBeTruthy();
});

test('It should always Password', () => {
  const { input } = setupPassword();
  userEvent.type(input, 'asd123');
  expect(input.value).toBe('asd123');
});
test('It should required Password', () => {
  const { input } = setupPassword();
  expect(input).toHaveValue('');
  expect(input).toHaveAttribute('required');
});
