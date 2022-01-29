import React, { FC } from 'react';

import clsxm from '../../lib/clsxm';

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  id: string;
  required?: boolean;
};

const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  type = 'text',
  id,
  required,
  ...props
}) => {
  return (
    <div className={clsxm('relative group', className)}>
      <label
        htmlFor="base-input"
        className="block mb-2 text-base font-medium text-gray-900 absolute left-[14px] -top-[14px] border-l-2 border-r-2 border-t border-b border-white bg-white group-focus:text-blue-500"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg group-focus:ring-blue-500 group-focus:border-blue-500 block w-full px-4 py-3"
        {...props}
        required={required}
      />
    </div>
  );
};

export default Input;
