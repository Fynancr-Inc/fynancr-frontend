import React from 'react';

interface FacebookIconProps {
  width?: number;
  height?: number;
  fillColor?: string;
  strokeColor?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({
  width = 48,
  height = 48,
  fillColor = '#77AFF0',
  strokeColor = '#77AFF0',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="23.5" stroke={strokeColor} />
      <g clipPath="url(#clip0)">
        <path
          d="M25.9899 18.9104H27.3571V16.4875C26.6951 16.4154 26.03 16.3798 25.3644 16.3809C23.3862 16.3809 22.0335 17.6456 22.0335 19.9618V21.958H19.8008V24.6704H22.0335V31.619H24.7099V24.6704H26.9353L27.2699 21.958H24.7099V20.2285C24.7099 19.4285 24.9135 18.9104 25.9899 18.9104Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="8" height="16" fill="white" transform="translate(19.8008 16)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
