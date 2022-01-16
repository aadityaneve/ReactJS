import {
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    ADD_TODO_BY_ID,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
} from './actionTypes';

import axios from 'axios';

export const postTodo = (todo) => (dispatch) => {
    dispatch(getTodoLoading());
    axios
        .post('http://localhost:3001/todos', todo)
        .then((response) => {
            dispatch(addTodoSuccess(response.data));
        })
        .catch((error) => {
            dispatch(addTodoError(error.message));
        });
};
export const getTodos = () => (dispatch) => {
    dispatch(getTodoLoading());
    axios
        .get('http://localhost:3001/todos')
        .then((response) => {
            dispatch(getTodoSuccess(response.data));
        })
        .catch((error) => {
            dispatch(getTodoError(error.message));
        });
};

export const getTodoById = (id) => (dispatch) => {
    dispatch(getTodoLoading());
    axios
        .get(`http://localhost:3001/todos/${id}`)
        .then((response) => {
            dispatch(addTodoById(response.data));
        })
        .catch((error) => {
            dispatch(getTodoError(error.message));
        });
};

export const updateTodoById = (id, data) => (dispatch) => {
    dispatch(getTodoLoading());
    axios
        .patch(`http://localhost:3001/todos/${id}`, {
            ...data,
            status: !data.status,
        })
        .then((response) => {
            dispatch(addTodoById(response.data));
        })
        .catch((error) => {
            dispatch(getTodoError(error.message));
        });
};

export const deleteTodoById = (id) => (dispatch) => {
    dispatch(getTodoLoading());
    axios
        .delete(`http://localhost:3001/todos/${id}`)
        .then((response) => {
            dispatch(addTodoById(response.data));
        })
        .catch((error) => {
            dispatch(getTodoError(error.message));
        });
};


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

export const addTodoById = (data) => {
    return {
        type: ADD_TODO_BY_ID,
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
