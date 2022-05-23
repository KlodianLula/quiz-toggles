import { useEffect } from 'react';
import { useAppSelector } from "../../redux/store/configureStore";
import { useAnswer } from '../../hooks/useAnswer';
import { useSpring, config, animated } from 'react-spring';
import { AnswerToggle } from '.';
import { AnswersWrapper, CorrectAnswer, QuestionTitle, QuizWrapper } from '../../styles/quiz'
import { bgColors, generateGridFractions, generateGridHeight } from '../../util';

export const Quiz = () => {
  const { totalCorrectAnswers, updateTotalCorrectAnswers } = useAnswer();
  const { quiz, gridFractions } = useAppSelector(state => state.quiz);

  const responsiveGridFractions = generateGridFractions(gridFractions);
  const responsiveGridHeight = generateGridHeight(gridFractions);

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

      <AnswersWrapper
        responsiveGridFractions={responsiveGridFractions}
        responsiveGridHeight={responsiveGridHeight+"px"}
        totalToggleOptions={quiz.answers[0].toggleOptions.length}
      >
        {quiz.answers.map((answer, answerIndex) =>
          <AnswerToggle
            key={answerIndex}
            answer={answer}
            answerIndex={answerIndex}
            totalCorrectAnswers={totalCorrectAnswers}
            totalToggleOptions={answer.toggleOptions.length}
          />)}
      </AnswersWrapper>

      <CorrectAnswer>
        The answer is {totalCorrectAnswers === quiz.answers.length ? "correct" : "incorrect"}
      </CorrectAnswer>
    </QuizWrapper>
  )
}
