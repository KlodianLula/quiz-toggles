import { useRef, useEffect, useState, useCallback } from "react";
import { useAppDispatch } from "../../redux/store/configureStore";
import { selectAnswerOption } from "../../redux/quizSlice";
import { getTextWidth, inMulish } from "../../util";
import { Answer } from "../../models/Answer";
import { useWindow } from "../../hooks/useWindow";
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

export interface AnswerProps {
  answer: Answer,
  answerIndex: number,
  totalCorrectAnswers: number,
  totalToggleOptions: number,
  totalAnswers: number
}

export const AnswerToggle = (
  { answer,
    answerIndex,
    totalCorrectAnswers,
    totalToggleOptions,
    totalAnswers,
  }: AnswerProps
) => {
  const dispatch = useAppDispatch();
  const { isOverlap, toggleWidth, calculateToggleWidth } = useWindow();

  const ref = useRef<any>();
  const [refWidth, setRefWidth] = useState("");
  const [optionsWidths, setOptionsWidths] = useState<number[]>([]);

  useEffect(() => {
    const tempArray = answer.toggleOptions.map(option => {
      return getTextWidth(option, inMulish);
    });
    setOptionsWidths(tempArray);
  }, []); // only on first load!

  const getToggleWidth = useCallback(() => {
    setRefWidth(window.getComputedStyle(ref.current).getPropertyValue("width"));

    calculateToggleWidth(refWidth, optionsWidths, totalToggleOptions, answerIndex);
  }, [refWidth, toggleWidth]);

  useEffect(() => {
    getToggleWidth();

    window.addEventListener('resize', getToggleWidth);
    return () => window.removeEventListener('resize', getToggleWidth);
  }, [answer, getToggleWidth]);

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
                disabled={totalCorrectAnswers === totalAnswers}
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
