import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'blue' | 'emerald' | 'slate' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  icon,
  className = '',
  glow = false
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-400/50',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-400/50',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400/50',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:border-slate-600'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5 font-medium',
    md: 'text-xs sm:text-sm px-3 py-1 gap-2 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2.5 font-semibold'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-all duration-200 backdrop-blur-sm ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${
        glow ? 'shadow-[0_0_12px_rgba(6,182,212,0.25)]' : ''
      } ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
