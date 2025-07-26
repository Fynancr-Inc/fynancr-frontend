import React from 'react';

interface LinkIconProps {
  variant?: 'default' | 'white';
}

const LinkIcon: React.FC<LinkIconProps> = ({ variant = 'default' }) => {
  const strokeColor = variant === 'white' ? '#FFFFFF' : '#0C133B';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 35 31" fill="none">
      <path
        d="M12.8509 24.1673H4.0633M8.85653 15.3797H1.66669M12.8509 6.5921H4.86217M25.6328 1L15.0934 15.7552C14.6269 16.4082 14.3937 16.7348 14.4038 17.007C14.4126 17.2441 14.5262 17.4649 14.714 17.6098C14.9297 17.7763 15.331 17.7763 16.1335 17.7763H24.0351L22.4373 29.7594L32.9767 15.0042C33.4432 14.3511 33.6765 14.0246 33.6664 13.7523C33.6576 13.5153 33.5439 13.2944 33.3562 13.1495C33.1405 12.9831 32.7392 12.9831 31.9366 12.9831H24.0351L25.6328 1Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkIcon;
