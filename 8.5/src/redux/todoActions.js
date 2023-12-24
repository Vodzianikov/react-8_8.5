import { v4 as uuidv4 } from 'uuid';

import { TODO_ACTION_TYPES } from "./todoActionTypes";

export const addTodo = (todoText) => ({
    type: TODO_ACTION_TYPES.ADD_TODO,
    payload: {
        text: todoText,
        done: false,
        id: uuidv4()
    }
})

// {
//     text: 'gfdfg',
//     done: false,
//     id: '35345'
// }