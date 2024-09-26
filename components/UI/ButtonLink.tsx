import Link from 'next/link'; // Assuming you're using Next.js

export const ButtonLink = ({ href, children = 'Default Text', color = 'blue', className = '' }) => {
  const baseStyles = "inline-block font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none focus:ring-4";
  
  const colorStyles = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    white: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
  };

  const buttonStyle = `${baseStyles} ${colorStyles[color] || colorStyles.blue} ${className}`;

  return (
    <Link href={href} className={buttonStyle}>
      {children}
    </Link>
  );
};
