import { useState } from "react";
import { incrementGridFraction, decrementGridFraction } from "../redux/quizSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { checkOverlap } from "../util";

export const useWindow = () => {
  const dispatch = useAppDispatch();
  const { gridFractions } = useAppSelector(state => state.quiz);
  const [toggleWidth, setToggleWidth] = useState(1000);
  const [isOverlap, setIsOverlap] = useState(false);

  const calculateToggleWidth = (
    refWidth: string,
    optionsWidths: number[],
    totalToggleOptions: number,
    answerIndex: number
  ) => {
    setToggleWidth(parseInt(refWidth.split(".")[0]));

    const isOverlaping: boolean = checkOverlap(
      toggleWidth, optionsWidths, totalToggleOptions
    );

    if (isOverlaping) {
      setIsOverlap(isOverlaping);
      dispatch(incrementGridFraction({ answerIndex, totalToggleOptions }));
    }

    if (!isOverlaping && gridFractions[answerIndex] > 1) {
      setIsOverlap(isOverlaping);
      dispatch(decrementGridFraction({ answerIndex }));
    }
  }

  return { isOverlap, toggleWidth, calculateToggleWidth };
};
