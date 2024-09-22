import React from 'react';

interface StepNavigationProps {
  prev: () => void;
  next: () => void;
  currentStep: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSteps: any[];
}

export const StepNavigation: React.FC<StepNavigationProps> = ({ prev, next, currentStep, formSteps }) => {
  return (
    <div className="flex justify-between">
      <button
        className="border border-gray-300 py-1 px-2 rounded-md
        hover:bg-gray-100
        disabled:cursor-not-allowed
        transition-colors duration-200 ease-in-out"
        type="button"
        onClick={prev}
        disabled={currentStep === 0}
      >
        Back
      </button>
      <button
        className="border hover:bg-gray-100 transition-colors
        duration-200 ease-in-out border-gray-300 py-1 px-2 rounded-md"
        type="button"
        onClick={next}
        disabled={currentStep === formSteps.length - 1}
      >
        Next
      </button>
    </div>
  );
};

