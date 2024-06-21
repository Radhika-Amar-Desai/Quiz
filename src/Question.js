import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Container } from '@mui/material';

const Question = ({ question, answerOptions, onSelectOption }) => {
  return (
    <Container style={{
      padding: '30px 50px',
      width: 'fit-content',
      borderRadius: '10px',
      boxShadow: '5px 5px 10px #999999',
    }}>
      <Typography variant="h5" style={{
        marginBottom: '20px',
        textAlign: 'center',
      }}>{question}</Typography>
      <ButtonGroup variant="outlined" disableElevation aria-label="Basic button group">
        {answerOptions.map((option, index) => (
          <Button disableElevation
            variant="contained" 
            color="primary" 
            key={index} 
            onClick={() => onSelectOption(index)}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default Question;