import Display from "../components/Display/Display";
import quizData from "../data/quiz.js"; // ← ここを正しく書く

export default function QuizPage() {
    const quizIndex = 0;
  return (
    <>
      <Display>
        {`01. ${quizData[0].question}`}
      </Display>
    </>
  );
}
