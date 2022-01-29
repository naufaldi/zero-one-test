import React, { FC } from 'react';

import clsxm from '../../lib/clsxm';

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={clsxm('relative', className)}>
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type="text"
        id="base-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </div>
  );
};

export default Input;
