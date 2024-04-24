import React from 'react';

const Question = ({ question, answerOptions, onSelectOption }) => {
  return (
    <div>
      <p>{question}</p>
      {answerOptions.map((option, index) => (
        <button key={index} onClick={() => onSelectOption(index)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
