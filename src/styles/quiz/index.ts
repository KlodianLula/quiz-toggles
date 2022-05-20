import styled from "styled-components"
import { theme } from "../theme";
import { widthBreakpoints } from "../mediaQueries";
import { tgColors } from "../../util";

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
  height: 100vh;

  @media (max-width: 320px) { 
    width: 320px;
  };

  @media (max-height: 720px) {
    height: 720px;
  };
`;
export const QuestionTitle = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  z-index: 3;
  color: white; 

  @media (min-width: ${widthBreakpoints["md"]}em) {
    font-size: 40px;
  }
`;
export const CorrectAnswer = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  z-index: 3;
  color: white; 

  @media (min-width: ${widthBreakpoints["md"]}em) {
    font-size: 32px;
  }
`;
export const AnswersWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%; 
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;
export const ToggleWrapper = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const ToggleBackWrapper = styled.div<{
  resizedToggleWidth: number,
  optionsWidth: number[],
  answerIndex: number,
  totalCorrectAnswers: number
}>`
  position: absolute;
  z-index: 1;
  width: 95vw;
  border: 2px solid #FBFBFB;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  border-color: ${({ totalCorrectAnswers }) =>
    tgColors[totalCorrectAnswers][1]}; 

  border-radius: ${({ optionsWidth, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? "24px"
      : "40px"};    

  height: ${({ optionsWidth, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? "96px"
      : "48px"};

  @media (max-width: 320px) { 
    width: 300px;
  };

  @media (min-width: ${widthBreakpoints["md"]}em) { 
    width: 95vw;
    height: ${({ optionsWidth, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? "160px"
      : "80px"};
  };

  @media (min-width: ${widthBreakpoints["lg"]}em) { 
    width: 900px;
  };
`;

export const ToggleBack = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent; 
  box-sizing: border-box;
  cursor: pointer;
`;

export const SelectToggleBack = styled.button<{
  resizedToggleWidth: number,
  optionsWidth: number[],
  selectedOption: boolean,
  totalCorrectAnswers: number
}>`
  border: 0px;
  margin-top: -2px; 
  margin-left: -2px; 
  transition: all 0.1s ease-in-out;
  width: calc(50% + 2px); 
  height: 48px; 

  background-color: ${({ totalCorrectAnswers }) =>
    tgColors[totalCorrectAnswers][1]}; 

  width: ${({ optionsWidth, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? "calc(100% + 2px)"
      : "calc(50% + 2px)"};

  transform: ${({ optionsWidth, selectedOption, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? (!selectedOption
        ? "translateY(0px)"
        : "translateY(calc(100%))")
      : (!selectedOption
        ? "translateX(0px)"
        : "translateX(calc(100%))")
  };

  border-radius: ${({ optionsWidth, selectedOption, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? (!selectedOption
        ? "24px 24px 0px 0px"
        : "0px 0px 24px 24px")
      : (!selectedOption
        ? "40px"
        : "40px")
  };

  @media (min-width: ${widthBreakpoints["md"]}em) {
    height: 80px; 

    width: ${({ optionsWidth, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? "calc(100% + 2px)"
      : "calc(50% + 2px)"};

    transform: ${({ optionsWidth, selectedOption, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? (!selectedOption
        ? "translateY(0px)"
        : "translateY(calc(100%))")
      : (!selectedOption
        ? "translateX(0px)"
        : "translateX(calc(100%))")};

    border-radius: ${({ optionsWidth, selectedOption, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? (!selectedOption
        ? "24px 24px 0px 0px"
        : "0px 0px 24px 24px")
      : (!selectedOption
        ? "40px"
        : "40px")};
  };
`;

export const ToggleFrontWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 95vw;

  @media (max-width: 320px) { 
    width: 320px;
  };

  @media (min-width: ${widthBreakpoints["lg"]}em) { 
    width: 900px;
  };
`;

export const ToggleFront = styled.div<{
  resizedToggleWidth: number,
  optionsWidth: number[],
}>`
  display: flex;
  align-items: center;
  justify-content: start;
  white-space: nowrap;

  flex-direction: ${({ optionsWidth, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? "column"
      : "row"
  };

  @media (min-width: ${widthBreakpoints["md"]}em) {
    flex-direction: ${({ optionsWidth, resizedToggleWidth }) =>
    (((resizedToggleWidth / 2) < optionsWidth[0]) || ((resizedToggleWidth / 2) < optionsWidth[1]))
      ? "column"
      : "row"};
  }
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
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${({ optionIndex, selectedIndex, totalCorrectAnswers }) =>
    optionIndex === selectedIndex
      ? tgColors[totalCorrectAnswers][0]
      : theme.white};

  @media (min-width: ${widthBreakpoints["md"]}em) {
    line-height: 80px;
    font-size: 24px;
  }
`;
