import { createSlice } from "@reduxjs/toolkit"
import { mockData_2_Options, mockData_3_Options } from "../data/mock";
import { Quiz } from "../models/Quiz"
import { shuffleAnswers } from "../util";

export interface QuizState {
    quiz: Quiz,
    gridFractions: number[]
}

const quizInitialValue: Quiz = mockData_2_Options; // for answers with 3 options use -->  mockData_3_Options;
const gridInitialFractions: number[] = Array(quizInitialValue.answers.length).fill(1);

const shuffledAnswers = shuffleAnswers(quizInitialValue.answers);

const initialState: QuizState = {
    quiz: quizInitialValue,
    gridFractions: gridInitialFractions
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        shuffleQuizAnswers: (state) => {
            state.quiz = {
                ...state.quiz,
                answers: [
                    ...shuffledAnswers
                ]
            }
        },
        selectAnswerOption: (state, action) => {
            const { answerIndex, optionIndex } = action.payload;

            state.quiz = {
                ...state.quiz,
                answers: [
                    ...state.quiz.answers.slice(0, answerIndex),
                    {
                        ...state.quiz.answers[answerIndex],
                        "selectedIndex": optionIndex,
                    },
                    ...state.quiz.answers.slice(answerIndex + 1, state.quiz.answers.length),
                ]
            }
        },
        incrementGridFraction: (state, action) => {
            const { answerIndex, totalToggleOptions } = action.payload;

            state.gridFractions = [
                ...state.gridFractions.slice(0, answerIndex),
                totalToggleOptions,
                ...state.gridFractions.slice(answerIndex + 1, state.gridFractions.length),
            ]
        },
        decrementGridFraction: (state, action) => {
            const { answerIndex } = action.payload;

            state.gridFractions = [
                ...state.gridFractions.slice(0, answerIndex),
                1,
                ...state.gridFractions.slice(answerIndex + 1, state.gridFractions.length),
            ]
        }
    }
})

export const { shuffleQuizAnswers, selectAnswerOption, incrementGridFraction, decrementGridFraction } = quizSlice.actions;