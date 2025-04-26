import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, fullWidth = true, className = '', ...props }, ref) => {
    const inputClasses = `
      block
      w-full
      px-4
      py-2
      border
      rounded-lg
      text-neutral-900
      bg-white
      transition-all
      duration-200
      focus:outline-none
      focus:border-primary-500
      focus:ring-2
      focus:ring-primary-200
      ${error ? 'border-error-500' : 'border-neutral-300'}
      ${icon ? 'pl-10' : ''}
      ${className}
    `;

    const containerClass = fullWidth ? 'w-full' : '';

    return (
      <div className={`mb-4 ${containerClass}`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block mb-2 text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
              {icon}
            </div>
          )}
          <input ref={ref} className={inputClasses} {...props} />
        </div>
        {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;