import { useRef, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/configureStore";
import {
  ToggleWrapper,
  ToggleBackWrapper,
  ToggleBack,
  ToggleFrontWrapper,
  ToggleFront,
  ToggleFrontOption,
  ToggleBackSlider,
  OptionText
} from "../../styles/quiz"
import "@fontsource/mulish";
import useTextWidth from "../../hooks/lib/useTextWidth";
import { incrementGridFraction, decrementGridFraction, selectAnswerOption } from "../../redux/quizSlice";
import { checkOverlap } from "../../util";
import { Answer } from "../../models/Answer";

export interface AnswerProps {
  answer: Answer,
  answerIndex: number,
  totalCorrectAnswers: number,
  totalToggleOptions: number
}

export const AnswerToggle = (
  { answer,
    answerIndex,
    totalCorrectAnswers,
    totalToggleOptions,
  }: AnswerProps
) => {
  const dispatch = useAppDispatch();
  const { gridFractions } = useAppSelector(state => state.quiz);

  const inMulish = "27.8px times";
  const optionsWidth = [
    useTextWidth({ text: answer.toggleOptions[0], font: inMulish }),
    useTextWidth({ text: answer.toggleOptions[1], font: inMulish })
  ];

  const ref = useRef<any>();
  const [toggleWidth, setToggleWidth] = useState(1000);
  const [isOverlap, setIsOverlap] = useState(false);

  const getToggleWidth = () => {
    setToggleWidth(parseInt(window.getComputedStyle(ref.current)
      .getPropertyValue("width")
      .split(".")[0]));

    const isOverlaping: boolean = checkOverlap(toggleWidth, optionsWidth, totalToggleOptions);

    if (isOverlaping) {
      setIsOverlap(isOverlaping);
      dispatch(incrementGridFraction({ answerIndex, totalToggleOptions }));
    }

    if (!isOverlaping && gridFractions[answerIndex] > 1) {
      setIsOverlap(isOverlaping);
      dispatch(decrementGridFraction({ answerIndex }));
    }
  }

  useEffect(() => {
    getToggleWidth(); // on load,

    window.addEventListener('resize', getToggleWidth);
    return () => window.removeEventListener('resize', getToggleWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleWidth, setToggleWidth]); // dependency is handled by the event listener.

  return (
    <ToggleWrapper>
      <ToggleBackWrapper
        ref={ref}
        isOverlap={isOverlap}
        totalCorrectAnswers={totalCorrectAnswers}
        totalToggleOptions={totalToggleOptions}
      >
        <ToggleBack>
          <ToggleBackSlider
            isOverlap={isOverlap}
            selectedIndex={answer.selectedIndex}
            totalCorrectAnswers={totalCorrectAnswers}
            totalToggleOptions={totalToggleOptions}
          />
        </ToggleBack>
      </ToggleBackWrapper>

      <ToggleFrontWrapper>
        <ToggleFront
          isOverlap={isOverlap}
          totalToggleOptions={totalToggleOptions}
        >
          {answer.toggleOptions.map((optionText, optionIndex) =>
            <ToggleFrontOption
              key={parseInt(answerIndex.toString() + optionIndex.toString())}
            >
              <OptionText
                disabled={totalCorrectAnswers > 3} // here not hard coded!
                onClick={() => dispatch(selectAnswerOption({ answerIndex, optionIndex }))}
                optionIndex={optionIndex}
                selectedIndex={answer.selectedIndex}
                totalCorrectAnswers={totalCorrectAnswers}
              >
                {optionText}
              </OptionText>
            </ToggleFrontOption>
          )}
        </ToggleFront>
      </ToggleFrontWrapper>
    </ToggleWrapper>
  )
}
