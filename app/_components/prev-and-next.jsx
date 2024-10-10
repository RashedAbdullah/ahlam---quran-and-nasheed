"use client";

import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";

const PrevAndNextButton = ({
  onPrevClick,
  onNextClick,
  isPrevDisabled,
  isNextDisabled,
}) => {
  return (
    <div className="flex justify-between items-center my-5">
      {/* Previous Button */}
      <Button
        onClick={onPrevClick}
        disabled={isPrevDisabled}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
          isPrevDisabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        <FaArrowLeft className="text-lg" />
        Previous
      </Button>

      {/* Next Button */}
      <Button
        onClick={onNextClick}
        disabled={isNextDisabled}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
          isNextDisabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
      >
        Next
        <FaArrowRight className="text-lg" />
      </Button>
    </div>
  );
};

export default PrevAndNextButton;
