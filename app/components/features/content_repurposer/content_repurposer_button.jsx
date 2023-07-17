import React, { useState } from 'react';
import RepurposerCard from './repurposer_card';


const ContentRepurposerToolButton = () => {
  const [showEvaluation, setShowEvaluation] = useState(false);

  const handleButtonClick = () => {
    setShowEvaluation(true);
  };

  const handleBackButtonClick = () => {
    setShowEvaluation(false);
  };

  return (
    <>
      {showEvaluation ? (
        <>
          <button
            className="absolute top-20 left-4 text-gray-600"
            onClick={handleBackButtonClick}
          >
            Back
          </button>
          <RepurposerCard/>
        </>
      ) : (
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-500 active:bg-indigo-700"
          onClick={handleButtonClick}
        >
          <span>Repurpose Content</span>
        </button>
      )}
    </>
  );
};

export default ContentRepurposerToolButton;
