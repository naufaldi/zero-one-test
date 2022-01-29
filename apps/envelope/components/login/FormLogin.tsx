import Link from 'next/link';
import React, { FC } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const FormLogin: FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
  };
  return (
    <form className="flex flex-col mt-4">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder=""
        label="Email"
        id="email"
        type="email"
        required
        className="mb-8"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder=""
        label="Password"
        id="password"
        type="password"
        required
        className="mb-2"
      />
      <Link href="/">
        <a href="" className="text-blue mb-8 font-semibold hover:underline ">
          Forgot Password
        </a>
      </Link>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <span className="text-sm flex">
          <p>New User? </p>{' '}
          <Link href="/">
            <a
              href=""
              className="text-blue font-semibold ml-1 hover:underline mb-4"
            >
              {'  '}
              Create Account
            </a>
          </Link>
        </span>
        <Button
          variant="primary"
          size="large"
          className="w-full sm:w-auto items-center justify-center"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
