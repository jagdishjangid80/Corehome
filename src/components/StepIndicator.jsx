import React from "react";

const StepIndicator = ({ currentStep, totalSteps, className = "" }) => {
  return (
    <div className={`flex justify-center space-x-2 ${className}`}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-3 rounded-full transition-all duration-300 ${
            index === currentStep ? "bg-[#ebbb53] w-6" : "bg-gray-500 w-3"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
