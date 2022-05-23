import { useState } from "react";
import { mockData_3_Options } from "../data/mock";
import { Answer } from "../models/Answer";

export const useQuiz = (initialValue = mockData_3_Options) => {
  const [quiz, setQuiz] = useState(initialValue);

  const solveQuiz = (answerIndex: number, optionIndex: number, answer: Answer) => {
    const newAnswer = {
      ...answer,
      "selectedIndex": optionIndex,
    }

    setQuiz(prevState => ({
      ...prevState,
      answers: [
        ...prevState.answers.slice(0, answerIndex),
        newAnswer,
        ...prevState.answers.slice(answerIndex + 1, prevState.answers.length),
      ]
    }));
  }

  return { quiz, solveQuiz };
};
