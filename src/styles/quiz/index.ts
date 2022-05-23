import styled from "styled-components"
import { theme } from "../theme";
import { widthBreakpoints } from "../mediaQueries";
import { tgColors, translateX_TwoOptions, translateX_ThreeOptions, translateY_TwoOptions, translateY_ThreeOptions } from "../../util";

export const QuizWrapper = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  @media (max-width: 320px) { 
    width: 320px;
  };

  // TODO: on 3 options: 920px ...
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
export const AnswersWrapper = styled.div<{
  responsiveGridFractions: string,
  responsiveGridHeight: string,
  totalToggleOptions: number
}>`
  position: relative;
  width: 100%;
  z-index: 100;
  display: grid;
  align-content: center;
  
  grid-template-rows: ${({ responsiveGridFractions }) => responsiveGridFractions};
  
  // TODO: calculate automatically
  height: ${({ totalToggleOptions, responsiveGridHeight }) =>
    (totalToggleOptions > 2)
      ? ("calc(" + responsiveGridHeight + " - 200px)")
      : ("calc(" + responsiveGridHeight + " - 160px)")};

  @media (min-width: ${widthBreakpoints["md"]}em) { 
    height: ${({ responsiveGridHeight }) => responsiveGridHeight};
};
`;
export const ToggleWrapper = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const ToggleBackWrapper = styled.div<{
  isOverlap: boolean,
  totalCorrectAnswers: number,
  totalToggleOptions: number
}>`
  position: absolute;
  z-index: 1;
  width: 95vw;
  border: 2px solid #FBFBFB;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  border-color: ${({ totalCorrectAnswers }) =>
    tgColors[totalCorrectAnswers][1]}; 

  border-radius: 24px;

  height: ${({ totalToggleOptions, isOverlap }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? "144px"
        : "48px"
      : isOverlap
        ? "96px"
        : "48px"
  };

  @media (max-width: 320px) { 
    width: 300px;
  };

  @media (min-width: ${widthBreakpoints["md"]}em) { 
    width: 95vw;
    border-radius: 40px;

    height: ${({ isOverlap, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? "240px"
        : "80px"
      : isOverlap
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
export const ToggleBackSlider = styled.button<{
  isOverlap: boolean,
  selectedIndex: number,
  totalCorrectAnswers: number,
  totalToggleOptions: number,
}>`
  border: 0px;
  margin-top: -2px; 
  margin-left: -2px; 
  transition: all 0.1s ease-in-out;
  height: 48px;

  background-color: ${({ totalCorrectAnswers }) =>
    tgColors[totalCorrectAnswers][1]}; 

  width: ${({ isOverlap, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? "calc(100% + 2px)"
        : "calc(33.33% + 2px)"
      : isOverlap
        ? "calc(100% + 2px)"
        : "calc(50% + 2px)"};

  /* width: ${({ isOverlap, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? "calc(33.33% + 2px)"
        : "calc(100% + 2px)"
      : isOverlap
        ? "calc(100% + 2px)"
        : "calc(50% + 2px)"}; */

  /* transform: ${({ isOverlap, selectedIndex, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? translateY_ThreeOptions[selectedIndex]
        : translateX_ThreeOptions[selectedIndex]
      : isOverlap
        ? translateY_TwoOptions[selectedIndex]
        : translateX_TwoOptions[selectedIndex]
  }; */

  transform: ${({ isOverlap, selectedIndex, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? translateY_ThreeOptions[selectedIndex]
        : translateX_ThreeOptions[selectedIndex]
      : isOverlap
        ? translateY_TwoOptions[selectedIndex]
        : translateX_TwoOptions[selectedIndex]
  };

  border-radius: ${({ isOverlap, selectedIndex }) =>
    isOverlap
      ? (!selectedIndex
        ? "40px 40px 40px 40px"
        : "40px 40px 40px 40px")
      : (!selectedIndex
        ? "40px"
        : "40px")};

  /* border-radius: ${({ isOverlap, selectedIndex, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? (!selectedIndex
          ? "24px 24px 0px 0px"
          : "0px 0px 24px 24px")
        : (!selectedIndex
          ? "24px"
          : "24px")
      : isOverlap
        ? (!selectedIndex
          ? "24px 24px 0px 0px"
          : "0px 0px 24px 24px")
        : (!selectedIndex
          ? "24px"
          : "24px")
  }; */

  @media (min-width: ${widthBreakpoints["md"]}em) {
    height: 80px; 
    
    /* width: ${({ isOverlap, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? "calc(100% + 2px)"
        : "calc(33.33% + 2px)"
      : isOverlap
        ? "calc(100% + 2px)"
        : "calc(50% + 2px)"}; */

  /* transform: ${({ isOverlap, selectedIndex, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? translateY_ThreeOptions[selectedIndex]
        : translateX_ThreeOptions[selectedIndex]
      : isOverlap
        ? translateY_TwoOptions[selectedIndex]
        : translateX_TwoOptions[selectedIndex]
  }; */

  border-radius: ${({ isOverlap, selectedIndex }) =>
    isOverlap
      ? (!selectedIndex
        ? "40px 40px 40px 40px"
        : "40px 40px 40px 40px")
      : (!selectedIndex
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
  isOverlap: boolean,
  totalToggleOptions: number,
}>`
  display: flex;
  align-items: center;
  justify-content: start;
  white-space: nowrap;

  flex-direction: ${({ isOverlap, totalToggleOptions }) =>
    (totalToggleOptions > 2)
      ? isOverlap
        ? "column"
        : "row"
      : isOverlap
        ? "column"
        : "row"
  };
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
