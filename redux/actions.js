import { INC_COUNT, DEC_COUNT, ADD_TODO } from './actionTypes.js';

const incCountAction = { type: INC_COUNT, payload: 1 };
const decCountAction = { type: DEC_COUNT, payload: 1 };
const addTodoAction = {
    type: ADD_TODO,
    payload: { id: 1, title: 'Learn Redux', status: false },
};

export { incCountAction, decCountAction, addTodoAction };
