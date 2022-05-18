import { Answer } from "../models/Answer";
import { theme } from "../styles/theme";

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

export const sumCorrectAnswers = (answers: Answer[]) => {
  return answers.reduce((sum, answer) => {
    return sum + (answer.selectedIndex === answer.correctIndex ? 1 : 0);
  }, 0);
}
