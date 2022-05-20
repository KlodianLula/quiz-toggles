import { useAppDispatch } from "../../redux/store/configureStore";
import {
  ToggleWrapper,
  ToggleBackWrapper,
  ToggleBack,
  ToggleFrontWrapper,
  ToggleFront,
  ToggleFrontOption,
  SelectToggleBack,
  OptionText
} from "../../styles/quiz"
import { selectAnswerOption } from "../../redux/quizSlice";
import { Answer } from "../../models/Answer";
import useTextWidth from "../../hooks/lib/useTextWidth";
import "@fontsource/mulish";
import { useRef, useEffect, useState } from "react";

export interface AnswerProps {
  answer: Answer,
  answerIndex: number,
  totalCorrectAnswers: number
}

export const AnswerToggle = ({ answer, answerIndex, totalCorrectAnswers }: AnswerProps) => {
  const dispatch = useAppDispatch();
  const selectedOption = answer.selectedIndex === 1;
  const inMulish = "27.8px times";
  const optionsWidth = [
    useTextWidth({ text: answer.toggleOptions[0], font: inMulish }),
    useTextWidth({ text: answer.toggleOptions[1], font: inMulish })
  ];

  // shifi nje here keto me any
  const ref = useRef<any>();
  const [resizedToggleWidth, setResizedToggleWidth] = useState<any>();

  function getToggleWidthOnWindowResize() {
    const toggleWidth: string = window.getComputedStyle(ref.current).getPropertyValue("width");
    const toggleWidthNumber: number = parseInt(toggleWidth.split(".")[0]);
    setResizedToggleWidth(toggleWidthNumber);
  }

  useEffect(() => {
    getToggleWidthOnWindowResize();
    console.log(resizedToggleWidth); // remove this

    window.addEventListener('resize', getToggleWidthOnWindowResize);
    return () => window.removeEventListener('resize', getToggleWidthOnWindowResize);
  }, [resizedToggleWidth, setResizedToggleWidth]);

  return (
    <ToggleWrapper>
      <ToggleBackWrapper
        ref={ref}
        resizedToggleWidth={resizedToggleWidth}
        optionsWidth={optionsWidth}
        answerIndex={answerIndex}
        totalCorrectAnswers={totalCorrectAnswers}
      >
        <ToggleBack>
          <SelectToggleBack
            resizedToggleWidth={resizedToggleWidth}
            optionsWidth={optionsWidth}
            selectedOption={selectedOption}
            totalCorrectAnswers={totalCorrectAnswers}
          />
        </ToggleBack>
      </ToggleBackWrapper>
      <ToggleFrontWrapper>
        <ToggleFront
          resizedToggleWidth={resizedToggleWidth}
          optionsWidth={optionsWidth}
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
