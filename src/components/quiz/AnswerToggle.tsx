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

export interface AnswerProps {
  answer: Answer,
  answerIndex: number,
  totalCorrectAnswers: number
}

export const AnswerToggle = ({ answer, answerIndex, totalCorrectAnswers }: AnswerProps) => {
  const inMulish = "27.8px times";
  const optionWidths = [
    useTextWidth({ text: answer.toggleOptions[0], font: inMulish }),
    useTextWidth({ text: answer.toggleOptions[1], font: inMulish })
  ];
  const selectedOption = answer.selectedIndex === 1;
  const dispatch = useAppDispatch();

  return (
    <ToggleWrapper>
      <ToggleBackWrapper
        optionWidths={optionWidths}
        answerIndex={answerIndex}
      >
        <ToggleBack>
          <SelectToggleBack
            optionWidths={optionWidths}
            selectedOption={selectedOption}
            totalCorrectAnswers={totalCorrectAnswers}
          />
        </ToggleBack>
      </ToggleBackWrapper>
      <ToggleFrontWrapper>
        <ToggleFront
          optionWidths={optionWidths}
        >
          {answer.toggleOptions.map((optionText, optionIndex) =>

            <ToggleFrontOption
              key={parseInt(answerIndex.toString() + optionIndex.toString())}
            >
              <OptionText
                optionWidths={optionWidths}
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
