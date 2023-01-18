import { ButtonHTMLAttributes } from 'react';
import { FiLoader } from 'react-icons/fi';
import { TbMenu2 } from 'react-icons/tb';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  isLoading?: boolean
  isMovable?: boolean
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={`group px-6 py-3 rounded-full ${
        props.buttonType == 'PRIMARY'
          ? 'bg-[rgb(130,87,229)] hover:bg-[rgb(150,116,229)]'
          : props.buttonType == 'SECONDARY'
          ? 'bg-[rgb(60,55,72)] hover:bg-[rgb(106,97,127)]'
          : 'bg-transparent'
      } focus:ring-2 focus:ring-[rgb(217,205,247)] focus:outline-none transition-colors ease-linear duration-300 disabled:opacity-50 disabled:hover:bg-[rgb(60,55,72)] disabled:cursor-not-allowed ${props.isLoading ? 'cursor-wait' : ''} ${props.isMovable ? 'cursor-move' : ''}`}
      {...props}
    >
      <span className="flex justify-center items-center gap-2">
        {props.isLoading && (
            <FiLoader size={18} className="animate-spin" />
        )}
        {props.isMovable && (
          <TbMenu2 size={18} />
        )}
        {props.children}
      </span>
    </button>
  );
}
