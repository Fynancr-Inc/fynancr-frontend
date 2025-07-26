import React from 'react';

interface TwitterIconProps {
  fillColor?: string;
}

const TwitterIcon: React.FC<TwitterIconProps> = ({ fillColor = '#77AFF0' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23.5" stroke={fillColor} />
      <g clipPath="url(#clip0_190_3883)">
        <path
          d="M28.063 17.5H30.2683L25.4503 23.0067L31.1183 30.5H26.6803L23.2043 25.9553L19.227 30.5H17.0203L22.1737 24.61L16.7363 17.5H21.287L24.429 21.654L28.063 17.5ZM27.289 29.18H28.511L20.623 18.7507H19.3117L27.289 29.18Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_190_3883">
          <rect width="16" height="16" fill="white" transform="translate(15.9004 16)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
