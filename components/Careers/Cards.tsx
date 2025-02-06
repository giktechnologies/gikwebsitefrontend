interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    className?: string;
  }
  
  export function Select({ value, onChange, options, className = '' }: SelectProps) {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-3 border rounded-2xl shadow-md dark:bg-dark ${className}`}
      >
        {options.map((option) => (
          <option key={option} value={option} className="p-2">
            {option}
          </option>
        ))}
      </select>
    );
  }
  
  interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Card({ children, className = '' }: CardProps) {
    return (
      <div className={`wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden  bg-white shadow-one duration-300 dark:bg-dark
${className}`}>
        {children}
      </div>
    );
  }
  
  interface CardContentProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function CardContent({ children, className = '' }: CardContentProps) {
    return <div className={`p-6 ${className}`}>{children}</div>;
  }