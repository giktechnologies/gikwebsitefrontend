import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  color?: 'blue' | 'white';
  className?: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  children,
  color = 'blue',
  className = '',
}) => {
  const baseStyles =
    'inline-block font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 transition';
  const colorStyles = {
    blue:
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    white:
      'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
  };

  // Added w-full on mobile, md:w-auto for larger screens
  const responsiveWidth = 'w-full md:w-auto';

  const buttonStyle = `${baseStyles} ${colorStyles[color] || colorStyles.blue} ${responsiveWidth} ${className}`;

  return (
    <Link href={href} className={buttonStyle}>
      {children}
    </Link>
  );
};
