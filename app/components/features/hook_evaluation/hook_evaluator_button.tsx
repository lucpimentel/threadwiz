import { useState } from 'react';
import  EvaluationCard  from './evaluation_card';

const HookEvaluatorToolButton = () => {
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setShowEvaluation(true);
    setButtonVisible(false);
  };

  const handleBackButtonClick = () => {
    setShowEvaluation(false);
    setButtonVisible(true);
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
          <EvaluationCard />
        </>
      ) : (
        buttonVisible && (
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-500 active:bg-indigo-700"
            onClick={handleButtonClick}
          >
            <img
              src="https://raw.githubusercontent.com/lucpimentel/content_editor_gpt/main/reviewer.png"
              alt="Custom Icon"
              className="w-5 h-5"
              style={{ filter: 'invert(100%)' }}
            />
            <span>Evaluate Hook</span>
          </button>
        )
      )}
    </>
  );
};

export default HookEvaluatorToolButton;