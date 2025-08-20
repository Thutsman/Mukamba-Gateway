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
  imageSrc = '/logo.svg' // Use static path for now
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-18 h-18',
    lg: 'w-25 h-25',
    xl: 'w-35 h-35'
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
    console.log('Rendering image-only logo with src:', imageSrc);
    return (
      <div className={`${sizeClasses[size]} flex-shrink-0 ${className} flex items-center justify-center`}>
        <img
          src={imageSrc}
          alt="Mukamba Gateway Logo"
          className="w-full h-full object-contain"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          onLoad={() => console.log('Logo image loaded successfully')}
          onError={(e) => console.error('Logo image failed to load:', e)}
        />
      </div>
    );
  }

  // Default: combined logo (image + text)
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} flex-shrink-0 flex items-center justify-center`}>
        <img
          src={imageSrc}
          alt="Mukamba Gateway Logo"
          className="w-full h-full object-contain"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          onLoad={() => console.log('Logo image loaded successfully')}
          onError={(e) => console.error('Logo image failed to load:', e)}
        />
      </div>
      
      {/* Logo Text - Only show if showText is true */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-wide ios-logo-text ${size === 'sm' ? 'text-base' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-4xl'} ${colorClasses[color]}`}>
            Mukamba
          </span>
          <span className={`font-semibold tracking-wider ios-logo-text-large ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : size === 'lg' ? 'text-xl' : 'text-2xl'} ${color === 'white' ? 'text-gray-100' : color === 'dark' ? 'text-gray-700' : 'text-red-600'}`}>
            GATEWAY
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;

 