import React from 'react';

interface FramerIconProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const FramerIcon: React.FC<FramerIconProps> = ({ fillColor = '#E7E7EB', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.6665H5.60008V15.9999L0 10.6665Z"
        fill={fillColor}
      />
      <path
        d="M5.60008 5.33325H0V10.6667H11.2002L5.60008 5.33325Z"
        fill={fillColor}
      />
      <path
        d="M0 -0.000244141L5.60008 5.33318H11.2002V-0.000244141H0Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default FramerIcon;
