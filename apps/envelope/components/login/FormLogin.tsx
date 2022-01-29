import Link from 'next/link';
import React, { FC } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const FormLogin: FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <form className="flex flex-col">
      <Input
        value={email}
        onChange={() => setEmail(email)}
        placeholder=""
        label="Email"
      />
      <Input
        value={password}
        onChange={() => setPassword(password)}
        placeholder=""
        label="Password"
      />
      <Link href="/">
        <a href="" className="text-blue">
          Forgot Password
        </a>
      </Link>
      <div className="flex items-center justify-between">
        <span>
          <p>New User? </p>{' '}
          <Link href="/">
            <a href="" className="text-blue">
              Create Account
            </a>
          </Link>
        </span>
        <Button variant="primary" size="medium">
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
