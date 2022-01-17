import { REQRES_AUTH, SET_JOB, GET_JOBS, SORT_ASC, SORT_DEC } from './actionTypes';

import axios from 'axios';

export const fetchJobs = () => (dispatch) => {
    axios
        .get(`http://localhost:3001/jobs`)
        .then((response) => {
            dispatch(getJobs(response.data));
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const postJob = (job) => (dispatch) => {
    axios
        .post(`http://localhost:3001/jobs`, job)
        .then((response) => {
            dispatch(setJob(response.data));
            console.log('response.data:', response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const saveTokenToLocalStorage = (token) => (dispatch) => {
    if (localStorage.getItem('authToken') === null) {
        localStorage.setItem('authToken', JSON.stringify(''));
    }

    localStorage.setItem('authToken', JSON.stringify(token));
    dispatch(addRequresAuth(token));
};

export const deleteTokenFromLocalStorage = () => (dispatch) => {
    localStorage.setItem('authToken', JSON.stringify(''));
    dispatch(addRequresAuth(''));
};

export const fetchTokenFromLocalStorage = () => (dispatch) => {
    let token = localStorage.getItem('authToken');
    if (token.length !== 2) {
        dispatch(addRequresAuth(token));
    }
};

export const reqresAuth = () => (dispatch) => {
    axios
        .post(`https://reqres.in/api/login`, {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka',
        })
        .then((response) => {
            dispatch(saveTokenToLocalStorage(response.data.token));
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const addRequresAuth = (token) => {
    return {
        type: REQRES_AUTH,
        payload: token,
    };
};

export const getJobs = (data) => {
    return {
        type: GET_JOBS,
        payload: data,
    };
};

export const setJob = (data) => {
    return {
        type: SET_JOB,
        payload: data,
    };
};

export const sortAsc = (data) => {
    return {
        type: SORT_ASC,
        payload: data,
    };
};

export const sortDec = (data) => {
    return {
        type: SORT_DEC,
        payload: data,
    };
};
