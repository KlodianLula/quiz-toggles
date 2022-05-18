import { createSlice } from "@reduxjs/toolkit"
import { mockData } from "../data/mock";
import { Quiz } from "../models/Quiz"

export interface QuizState {
    quiz: Quiz,
}

const initialValue: Quiz = mockData;

const initialState: QuizState = {
    quiz: initialValue,
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        selectAnswerOption: (state, action) => {
            // state.quiz += action.payload
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
        }
        // decrement: (state, action) => {
        //     state.data -= action.payload
        // }
    }
})

export const { selectAnswerOption } = quizSlice.actions;