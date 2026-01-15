
import React from 'react';

interface InteractiveTextProps {
  text: string;
  hoverColor?: string;
  className?: string;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ 
  text, 
  hoverColor = "hover:text-blue-500/80",
  className = "" 
}) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className={`inline-block transition-colors duration-500 ease-out ${char === ' ' ? 'mr-[0.3em]' : ''} ${hoverColor}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default InteractiveText;
