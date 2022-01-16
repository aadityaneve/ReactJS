import {
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    ADD_TODO_BY_ID,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
} from './actionTypes';

const init = {
    loading: false,
    todos: [],
    todoById: {},
    error: false,
};

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD_TODO_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, payload],
                loading: false,
            };
        case ADD_TODO_BY_ID:
            return {
                ...state,
                todoById: payload,
            };
        case ADD_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case GET_TODO_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: payload,
                loading: false,
            };
        case GET_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
