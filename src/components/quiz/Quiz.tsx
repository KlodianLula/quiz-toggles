import { useEffect } from 'react';
import { useAppSelector } from "../../redux/store/configureStore";
import { useAnswer } from '../../hooks/useAnswer';
import { useSpring, config, animated } from 'react-spring';
import { AnswerToggle } from '.';
import { AnswersWrapper, CorrectAnswer, QuestionTitle, QuizWrapper } from '../../styles/quiz'
import { bgColors } from '../../util';

export const Quiz = () => {
  const { quiz } = useAppSelector(state => state.quiz);
  const { totalCorrectAnswers, updateTotalCorrectAnswers } = useAnswer();

  const springAnimatedColor = useSpring({
    background: bgColors[totalCorrectAnswers],
    config: config.slow,
  })

  useEffect(() => {
    updateTotalCorrectAnswers(quiz);
  }, [quiz, updateTotalCorrectAnswers]);

  return (
    <QuizWrapper
      as={animated.div}
      style={springAnimatedColor}
    >
      <QuestionTitle>
        {quiz.question}
      </QuestionTitle>

      <AnswersWrapper>
        {quiz.answers.map((answer, answerIndex) =>
          <AnswerToggle
            key={answerIndex}
            answer={answer}
            answerIndex={answerIndex}
            totalCorrectAnswers={totalCorrectAnswers}
          />)}
      </AnswersWrapper>

      {/* hard coded */}
      <CorrectAnswer>
        The answer is {totalCorrectAnswers > 3 ? "correct" : "incorrect"}
      </CorrectAnswer>
    </QuizWrapper>
  )
}
