import Display from "../components/Display/Display";
import quizData from "../data/quiz.js";
import Button from "../components/Button/Button.jsx";
import { use, useEffect, useState } from "react";
import { ROUTES } from "../const.js";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
  };
  // prev前の値
  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter((answer) => {
        return answer == true;
      });
      navigation(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
        },
      });
    }
  }, [answerLogs, answerLogs, MAX_QUIZ_LEN]);
  return (
    <>
      {quizData[quizIndex] && (
        <Display>{`01. ${quizData[quizIndex].question}`}</Display>
      )}

      {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => (
        <Button key={`option-${index}`} onClick={() => handleClick(index)}>
          {option}
        </Button>
      ))}
    </>
  );
}
