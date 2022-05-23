import { useState } from "react";
import { Quiz } from "../models/Quiz";
import { useAppSelector } from "../redux/store/configureStore";
import { sumCorrectAnswers } from "../util";

export const useAnswer = () => {
  const { quiz } = useAppSelector(state => state.quiz);
  const initialCorrectAnswers = sumCorrectAnswers(quiz.answers);

  const [totalCorrectAnswers, setTotalCorrectAnswers ] = useState(initialCorrectAnswers);

  const updateTotalCorrectAnswers = (quiz: Quiz) => {
    const sum = sumCorrectAnswers(quiz.answers);

    setTotalCorrectAnswers(sum);
  }

  return { totalCorrectAnswers, updateTotalCorrectAnswers };
};
