import { MouseEventHandler, ReactNode } from 'react';

import { cn } from '@/lib/util';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: any; // @todo: Fix this type
  size?: string;
  href?: string;
  download?: boolean;
}

const Button = ({ children, className = '',  onClick, size = 'sm', href, download }: ButtonProps) => {

  const buttonClassName = 'inline-flex items-center justify-between gap-2 text-white hover:text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded font-black uppercase';
  let sizeClassName = 'text-sm py-2.5 px-6';

  if ( size === 'xs' ) {
    sizeClassName = 'text-xs py-2 px-4';
  }

  if ( typeof href === 'string' ) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(`${buttonClassName} ${sizeClassName}`, className)}
        download={download}
      >
        { children }
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(`${buttonClassName} ${sizeClassName}`, className)}>
      { children }
    </button>
  )
}

export default Button;