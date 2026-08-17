import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  badgeVariant?: 'cyan' | 'purple' | 'blue' | 'emerald' | 'amber';
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  badgeVariant = 'cyan',
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div className={`mb-4 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant} icon={badgeIcon} glow>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
