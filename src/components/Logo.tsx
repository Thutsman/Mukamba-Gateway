import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'dark' | 'primary';
  className?: string;
  showText?: boolean;
  logoType?: 'image' | 'text-only' | 'combined';
  imageSrc?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  color = 'dark', 
  className = '', 
  showText = true,
  logoType = 'combined',
  imageSrc = '/logo.jpeg'
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const colorClasses = {
    white: 'text-white',
    dark: 'text-gray-900',
    primary: 'text-primary'
  };

  // If logoType is 'text-only', only show text
  if (logoType === 'text-only') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className={`font-bold tracking-wide ${size === 'sm' ? 'text-base' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-4xl'} ${colorClasses[color]}`}>
          Mukamba
        </span>
        <span className={`font-semibold tracking-wider ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : size === 'lg' ? 'text-xl' : 'text-2xl'} ${color === 'white' ? 'text-gray-100' : color === 'dark' ? 'text-gray-700' : 'text-red-600'}`}>
          GATEWAY
        </span>
      </div>
    );
  }

  // If logoType is 'image', only show image
  if (logoType === 'image') {
    return (
      <div className={`${sizeClasses[size]} flex-shrink-0 ${className}`}>
        <img
          src={imageSrc}
          alt="Mukamba Gateway Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Default: combined logo (image + text)
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <img
          src={imageSrc}
          alt="Mukamba Gateway Logo"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Logo Text - Only show if showText is true */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-wide ${size === 'sm' ? 'text-base' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-4xl'} ${colorClasses[color]}`}>
            Mukamba
          </span>
          <span className={`font-semibold tracking-wider ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : size === 'lg' ? 'text-xl' : 'text-2xl'} ${color === 'white' ? 'text-gray-100' : color === 'dark' ? 'text-gray-700' : 'text-red-600'}`}>
            GATEWAY
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
