import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-gray-500">
      <div className="animate-bounce">●</div>
      <div className="animate-bounce delay-100">●</div>
      <div className="animate-bounce delay-200">●</div>
    </div>
  );
};