import React from 'react';

interface ReverseIconProps {
  variant?: 'default' | 'white';
}

const ReverseIcon: React.FC<ReverseIconProps> = ({ variant = 'default' }) => {
  const strokeColor = variant === 'white' ? '#FFFFFF' : '#0C133B';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
      <path
        d="M25.9667 3.7V1M33.0542 5.6125L34.9667 3.7M34.9667 12.7H37.6667M37.5542 20.8C36.6542 29.9125 29.0042 37 19.6667 37C9.76675 37 1.66675 28.9 1.66675 19C1.66675 9.6625 8.75425 2.0125 17.8667 1.1125M19.6667 11.8H26.8667V19M26.1917 11.8C21.9167 17.7625 14.9417 21.7 7.06675 21.7C5.26675 21.7 3.46675 21.475 1.77925 21.1375"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReverseIcon;
