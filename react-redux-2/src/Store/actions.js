import {
    ADD_TODO,
    REMOVE_TODO,
    INC_COUNTER,
    DEC_COUNTER,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
} from './actionTypes';

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
});

export const addTodoLoading = () => {
    return {
        type: ADD_TODO_LOADING,
    };
};

export const addTodoSuccess = (data) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: data,
    };
};

export const addTodoError = (error) => {
    return {
        type: ADD_TODO_ERROR,
        payload: error,
    };
};

export const getTodoLoading = () => {
    return {
        type: GET_TODO_LOADING,
    };
};

export const getTodoSuccess = (data) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: data,
    };
};

export const getTodoError = (error) => {
    return {
        type: GET_TODO_ERROR,
        payload: error,
    };
};

export const incCounter = (data) => ({
    type: INC_COUNTER,
    payload: data,
});

export const decCounter = (data) => ({
    type: DEC_COUNTER,
    payload: data,
});
