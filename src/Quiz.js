import React, { useState } from 'react';
import Question from './Question';
import questionsData from './questions'; // Import questions
import { Button } from '@mui/material';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const questions = questionsData;

  const handleOptionSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswerIndex;
      setScore(score + (isCorrect ? 1 : 0));
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40vh',
          borderRadius: '10px',
        }}>
          <Question
            question={questions[currentQuestion].question}
            answerOptions={questions[currentQuestion].answerOptions}
            onSelectOption={handleOptionSelect}
          />
          {selectedAnswer !== null && (
            <p style={{
              marginTop: '20px',
            }}>
              Your answer: {questions[currentQuestion].answerOptions[selectedAnswer]}
            </p>
          )}
          <Button style={{
            marginTop: '20px',
          }} variant='contained' color='success' onClick={handleSubmit}>Submit Answer</Button>
        </div>
      ) : (
        <div>
          <h2>You finished the quiz!</h2>
          <p>Your score is: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
