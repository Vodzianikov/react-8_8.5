import { TODO_ACTION_TYPES } from "./todoActionTypes"

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTION_TYPES.ADD_TODO:
            return {
                todos: [...state.todos, { ...action.payload }]
            }
        case TODO_ACTION_TYPES.DELETE_TODO:
            return
        default:
            return { ...state }
    }
}