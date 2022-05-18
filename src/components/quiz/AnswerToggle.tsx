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

export interface AnswerProps {
  answer: Answer,
  answerIndex: number,
  totalCorrectAnswers: number
}

export const AnswerToggle = ({ answer, answerIndex, totalCorrectAnswers }: AnswerProps) => {
  const dispatch = useAppDispatch();

  const selectedOption = answer.selectedIndex === 1;

  return (
    <ToggleWrapper>
      <ToggleBackWrapper>
        <ToggleBack>
          <SelectToggleBack 
            selectedOption={selectedOption}
            totalCorrectAnswers={totalCorrectAnswers}
          />
        </ToggleBack>
      </ToggleBackWrapper>

      <ToggleFrontWrapper>
        <ToggleFront>
          {answer.toggleOptions.map((optionText, optionIndex) =>
            <ToggleFrontOption key={parseInt(answerIndex.toString() + optionIndex.toString())}>
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
