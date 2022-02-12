import * as React from 'react';
// import { Button } from '@material-ui/core';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css'
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions
}) => {

  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    }
    else if (selected === i && selected !== correct) {
      return "wrong";
    }
    else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
    else{
      setScore(score - 0.25);
    }
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    }
    else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    }
    else {
      setError("Please select an option first");
    }
  }

  // const handleQuit = () => {
  //   setCurrQues(0);
  //   setQuestions();
  // }

  const handleQuit = () => {
    setOpen(true);
  };

  const handleQuitYes = () => {
    setCurrQues(0);
    setQuestions();
    setOpen(false);
    navigate('/');
  };
  
  const handleQuitNo = () => {
    setOpen(false);
  };


  return (
    <div className='question'>
      <h1 style={{ fontWeight: 600 }}>Question: {currQues + 1}</h1>

      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <hr className='hr' />
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options &&
            options.map(i => (
              <button onClick={() => handleCheck(i)} className={`singleOption ${selected && handleSelect(i)}`} key={i} disabled={selected}>
                {i}
              </button>
            ))
          }
        </div>
        <div className='controls'>
          <Button variant='contained' color='secondary' size='large' style={{ width: 185, fontSize: 20 }} onClick={handleQuit}>QUIT</Button>
          <Button variant='contained' color='primary' size='large' style={{ width: 185, fontSize: 20 }} onClick={handleNext} endIcon={<ArrowForwardIosSharp />}>NEXT</Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleQuitNo}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Are You Sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                If you Quit, your data of this quiz will not be saved.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleQuitNo}>No</Button>
              <Button onClick={handleQuitYes}>Yes</Button>
            </DialogActions>
          </Dialog>
        </div>

      </div>
    </div>
  )
}

export default Question
