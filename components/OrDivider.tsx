import React from 'react';

function OrDivider({ text = 'OR' }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="text-xs px-2 bg-white text-gray-500 uppercase">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default OrDivider;
