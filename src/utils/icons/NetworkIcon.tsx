import React from 'react';

interface NetworkIconProps {
  variant?: 'default' | 'white';
}

const NetworkIcon: React.FC<NetworkIconProps> = ({ variant = 'default' }) => {
  const strokeColor = variant === 'white' ? '#FFFFFF' : '#0C133B';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
      <path
        d="M1.33337 17H33.3334M1.33337 17C1.33337 25.8 8.53337 33 17.3334 33M1.33337 17C1.33337 8.2 8.53337 1 17.3334 1M33.3334 17C33.3334 25.8 26.1334 33 17.3334 33M33.3334 17C33.3334 8.2 26.1334 1 17.3334 1M17.3334 33C21.3334 28.6444 23.6445 22.9556 23.7334 17C23.6445 11.0444 21.3334 5.35556 17.3334 1M17.3334 33C13.3334 28.6444 11.0223 22.9556 10.9334 17C11.0223 11.0444 13.3334 5.35556 17.3334 1"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NetworkIcon;
