import { Answer } from "../models/Answer";
import { Quiz } from "../models/Quiz";
import { theme } from "../styles/theme";

export const inMulish = "27.8px times";

export const bgColors = [
  theme.zeroCorrect,
  theme.oneCorrect,
  theme.twoCorrect,
  theme.threeCorrect,
  theme.fourCorrect
];

export const tgColors = [
  [
    theme.zeroCorrectOptionText,
    theme.zeroCorrectOptionToggle
  ],
  [
    theme.oneCorrectOptionText,
    theme.oneCorrectOptionToggle
  ],
  [
    theme.twoCorrectOptionText,
    theme.twoCorrectOptionToggle
  ],
  [
    theme.threeCorrectOptionText,
    theme.threeCorrectOptionToggle
  ],
  [
    theme.fourCorrectOptionText,
    theme.fourCorrectOptionToggle
  ]
];

// TODO:
// bring here all string literals
// or create separate file with constants
export const smToggleHeights = [
  "48px",
  "96px",
  "144px"
];

export const mdToggleHeights = [
  "80px",
  "160px",
  "240px"
];

export const gridItemHeights = [
  //TODO
];

export const translateX_TwoOptions = [
  "translateX(0px)",
  "translateX(calc(100%))"
];

export const translateY_TwoOptions = [
  "translateY(0px)",
  "translateY(calc(100%))"
];

export const translateX_ThreeOptions = [
  "translateX(0px)",
  "translateX(calc(100%))",
  "translateX(calc(200%))"
];

export const translateY_ThreeOptions = [
  "translateY(0px)",
  "translateY(calc(100%))",
  "translateY(calc(200%))"
];

export const sumCorrectAnswers = (answers: Answer[]) => {
  return answers.reduce((sum, answer) => {
    return sum + (answer.selectedIndex === answer.correctIndex ? 1 : 0);
  }, 0);
}

export const checkOverlap = (
  toggleWidth: number,
  optionsWidth: number[],
  totalToggleOptions: number
) => {
  return (totalToggleOptions > 2)
    ? (((toggleWidth / 3) < optionsWidth[0]) || ((toggleWidth / 3) < optionsWidth[1]) || ((toggleWidth / 3) < optionsWidth[2]))
    : (((toggleWidth / 2) < optionsWidth[0]) || ((toggleWidth / 2) < optionsWidth[1]));
}

export const generateGridFractions = (responsiveGridFractions: number[]) => {
  return responsiveGridFractions.reduce((generatedGridFractions, fraction) => {
    return generatedGridFractions + (fraction + "fr ");
  }, "");
}

export const generateGridHeight = (responsiveGridFractions: number[]) => {
  return responsiveGridFractions.reduce((generatedGridHeight, fraction) => {
    return generatedGridHeight + (fraction * 80) + 20;
  }, 0);
}

export const getTextWidth = (currentText: string, font: string) => {
  const fragment: DocumentFragment = document.createDocumentFragment();
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  fragment.appendChild(canvas);

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  context.font = font;

  const metrics = context.measureText(currentText);
  return metrics.width;
};

export const shuffleAnswers = (answers: Answer[]) => {
  for (let i = answers.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    const temp = answers[i];
    answers[i] = answers[j];
    answers[j] = temp;
  }
    
  return answers;
}