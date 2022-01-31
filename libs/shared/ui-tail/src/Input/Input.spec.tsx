import { render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { Input } from './Input';

function EmailInput() {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your Email Here"
      label="Email"
      id="email"
      type="email"
      required
    />
  );
}
function PasswordInput() {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your Password Here"
      label="Password"
      id="password"
      type="password"
      required
    />
  );
}
function TextInput() {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your Username Here"
      label="Username"
      id="username"
      type="text"
      required
    />
  );
}

test('render email component', () => {
  render(<EmailInput />);
  screen.getByRole('textbox', { name: /email/i });
});
test('render password component', () => {
  render(<PasswordInput />);
  screen.getByLabelText(/password/i);
});
test('render TextInput component', () => {
  render(<TextInput />);
  screen.getByLabelText(/username/i);
});
