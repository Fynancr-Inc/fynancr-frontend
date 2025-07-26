import React from 'react';

interface VerifiedIconProps {
  fillColor?: string;
  width?: number | string;
  height?: number | string;
}

const VerifiedIcon: React.FC<VerifiedIconProps> = ({
  fillColor = '#1A981B',
  width = 49,
  height = 50,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 49 50"
      fill="none"
    >
      <path
        d="M24.5 4.1665C13.2708 4.1665 4.08331 13.5415 4.08331 24.9998C4.08331 36.4582 13.2708 45.8332 24.5 45.8332C35.7291 45.8332 44.9166 36.4582 44.9166 24.9998C44.9166 13.5415 35.7291 4.1665 24.5 4.1665ZM24.5 41.6665C15.4962 41.6665 8.16665 34.1873 8.16665 24.9998C8.16665 15.8123 15.4962 8.33317 24.5 8.33317C33.5037 8.33317 40.8333 15.8123 40.8333 24.9998C40.8333 34.1873 33.5037 41.6665 24.5 41.6665ZM33.8712 15.7915L20.4166 29.5207L15.1287 24.1457L12.25 27.0832L20.4166 35.4165L36.75 18.7498L33.8712 15.7915Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default VerifiedIcon;
