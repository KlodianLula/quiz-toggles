import styled from "styled-components"
import { tgColors } from "../../util";
import { mediaHeightQueries, mediaWidthQueries, widthBreakpoints } from "../mediaQueries";
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

  ${mediaWidthQueries("sm")`
    
  `};
`;

export const QuestionTitle = styled.div`
  color: white; // here
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  z-index: 3;
`;

export const CorrectAnswer = styled.div`
  color: white; // here
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  z-index: 3;
`;
export const AnswersWrapper = styled.div`
  width: 100%;
  height: 70%; // calc(70vh); // here // 70%;
  z-index: 100;
  display: flex;
  justify-content: space-evenly; // here
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
export const ToggleBackWrapper = styled.div<{
  // parentWidth: number, 
  optionWidths: number[],
  answerIndex: number
}>`
  position: absolute;
  z-index: 1;
  border-radius: 9rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 2px solid #FBFBFB;

  height: ${({ optionWidths }) =>
    (optionWidths[0] > 450) ? "160px" : "80px"};

  width : 300px;

  ${mediaWidthQueries("sm")`
    width: 95vw;
  `}; 
  
  ${mediaWidthQueries("md")`
    width: 95vw;
  `};

  @media (min-width: ${widthBreakpoints["md"]}em) { 
    width: 900px;
    height: ${({ optionWidths }) =>
    (optionWidths[0] > 450) ? "160px" : "80px"};
  }
`;

export const ToggleBack = styled.div`
  display: flex;
  align-items: center;
  /* height: 80px; */
  background-color: transparent; 
  border-radius: 9rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const SelectToggleBack = styled.button<{
  optionWidths: number[],
  selectedOption: boolean,
  totalCorrectAnswers: number
}>`
height: 80px; //here

border-radius: 9rem;
border: 0px;
margin-top: -2px; //here
margin-left: -2px;

background-color: ${({ totalCorrectAnswers }) => tgColors[totalCorrectAnswers][1]};
// normal case
/* transform: ${({ selectedOption }) => (!selectedOption ? "translateX(0px)" : "translateX(calc(100%))")}; */
transition: all 0.2s ease-in-out;

width: calc(50% + 2px);
// also option[1]
width: ${({ optionWidths }) =>
    (optionWidths[0] > 450) ? "calc(100% + 2px)" : "calc(50% + 2px)"};


// column case
transform: ${({ optionWidths, selectedOption }) =>
    (optionWidths[0] > 450)
      ? (!selectedOption
        ? "translateY(0px)"
        : "translateY(calc(100%))")
      : (!selectedOption
        ? "translateX(0px)"
        : "translateX(calc(100%))")
  };

border-radius: ${({ optionWidths, selectedOption }) =>
    (optionWidths[0] > 450)
      ? (!selectedOption
        ? "100px 100px 0px 0px"
        : "0px 0px 100px 100px")
      : (!selectedOption
        ? "9rem"
        : "9rem")
  };

`;



// front
export const ToggleFrontWrapper = styled.div`
  position: absolute;
  z-index: 2;
  
  // here
  width: 300px;

  ${mediaWidthQueries("sm")`
    width: 95vw;
  `}; 
  
  ${mediaWidthQueries("md")`
    width: 95vw;
  `};

  ${mediaWidthQueries("lg")`
    width: 900px;
  `};
`;

export const ToggleFront = styled.div<{
  optionWidths: number[],
}>`
  display: flex;
  align-items: center;
  justify-content: start;
  /* flex-direction: column; */

  // option[1] also
  flex-direction: ${({ optionWidths }) =>
    (optionWidths[0] > 450) ? "column" : "row"};

`;

export const ToggleFrontOption = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
`;

export const OptionText = styled.button<{
  optionWidths: number[],
  optionIndex: number,
  selectedIndex: number,
  totalCorrectAnswers: number
}>`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  border: none;
  line-height: 80px;
  background-color: transparent;

  color: ${({ optionIndex, selectedIndex, totalCorrectAnswers }) =>
    optionIndex === selectedIndex
      ? tgColors[totalCorrectAnswers][0]
      : theme.white};
      

  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
