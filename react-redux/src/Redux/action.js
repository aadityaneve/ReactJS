import { ADD_TODO, UPDATE_STATUS } from './actionTypes';

// action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const updateStatus = (payload) => {
    return {
        type: UPDATE_STATUS,
        payload,
    };
};
