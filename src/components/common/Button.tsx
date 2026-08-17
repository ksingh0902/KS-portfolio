import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 select-none group cursor-pointer active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2 font-medium',
    md: 'text-sm sm:text-base px-5 py-2.5 gap-2.5 font-semibold',
    lg: 'text-base sm:text-lg px-7 py-3.5 gap-3 font-semibold rounded-2xl',
    xl: 'text-lg sm:text-xl px-8 py-4 gap-3.5 font-bold rounded-2xl'
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.65)] hover:brightness-110 border border-cyan-300/30',
    secondary:
      'bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/10 backdrop-blur-md',
    outline:
      'border border-slate-700 bg-transparent text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10',
    ghost:
      'bg-transparent text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50',
    glow:
      'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:brightness-110 border border-purple-400/30'
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
