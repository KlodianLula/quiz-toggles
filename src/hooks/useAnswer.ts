import { useState } from "react";
import { mockData } from "../data/mock";
import { Quiz } from "../models/Quiz";
import { sumCorrectAnswers } from "../util";

const initialCorrectAnswers = sumCorrectAnswers(mockData.answers);

export const useAnswer = () => {
  const [totalCorrectAnswers, setTotalCorrectAnswers ] = useState(initialCorrectAnswers);

  const updateTotalCorrectAnswers = (quiz: Quiz) => {
    const sum = sumCorrectAnswers(quiz.answers);

    setTotalCorrectAnswers(sum);
  }

  return { totalCorrectAnswers, updateTotalCorrectAnswers };
};
