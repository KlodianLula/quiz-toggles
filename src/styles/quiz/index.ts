import styled from "styled-components"
import { tgColors } from "../../util";
import { mediaHeightQueries, mediaWidthQueries } from "../mediaQueries";
import { theme } from "../theme";

export const QuizWrapper = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 1000px;

  ${mediaHeightQueries("lg")`
    height: 100vh;
  `};
`

export const QuestionTitle = styled.div`
  color: white; // here
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  z-index: 3;
`

export const CorrectAnswer = styled.div`
  color: white; // here
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  z-index: 3;
`
export const AnswersWrapper = styled.div`
  width: 100%;
  height: 50%;
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const ToggleWrapper = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
`;

// back
export const ToggleBackWrapper = styled.div`
  position: absolute;
  line-height: 80px;
  width: 900px; // here
  z-index: 1;
  background: transparent; 
  border-radius: 9rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 2px solid #FBFBFB;
`;

export const ToggleBack = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: transparent; 
  border-radius: 9rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const SelectToggleBack = styled.button<{
  selectedOption: boolean,
  totalCorrectAnswers: number
}>`
  width: calc(50% + 2px);
  height: 84px;
  border-radius: 9rem;
  border: 0px;
  margin-left: -2px;
  background-color: ${({ totalCorrectAnswers }) => tgColors[totalCorrectAnswers][1]};
  transform: ${(props) => (!props.selectedOption ? "translateX(0px)" : "translateX(450px)")};
  transition: all 0.2s ease-in-out;
`;

// front
export const ToggleFrontWrapper = styled.div`
  position: absolute;
  width: 900px; // here
  height: 80px; // take care of this
  z-index: 2;
  opacity: 0.8;
`;

export const ToggleFront = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleFrontOption = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
`;

export const OptionText = styled.button<{
  optionIndex: number,
  selectedIndex: number,
  totalCorrectAnswers: number
}>`
  border: none;
  width: 100%;
  line-height: 80px;
  /* font-size: 20px; */
  background-color: transparent;

  color: ${({ optionIndex, selectedIndex, totalCorrectAnswers }) =>
    optionIndex === selectedIndex
      ? tgColors[totalCorrectAnswers][0]
      : theme.white};

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  // hereee
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;
