import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react"
import './Quiz.css'
import Question from "../../components/Question/Question";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(questions && handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers,
    ]));
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };


  return (
    <div className="quiz">
      <span className="subtitle"> Welcome, {name} </span>
      {
        questions ? (
          <>
            <div className="quizInfo">
              <span className="category">{questions[currQues].category}</span>
              <span className="score">Score : {score}/10</span>
            </div>

            <Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />


          </>
        ) : (
          <CircularProgress style={{ margin: 100 }} color="inherit" size={150} thickness={1} />
        )
      }
    </div>
  )
}

export default Quiz