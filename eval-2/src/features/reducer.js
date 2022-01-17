import {
    REQRES_AUTH,
    SET_JOB,
    GET_JOBS,
    SORT_ASC,
    SORT_DEC,
} from './actionTypes';

const init = {
    authToken: '',
    jobs: [],
};

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case REQRES_AUTH:
            return {
                ...state,
                authToken: payload,
            };

        case SET_JOB:
            return {
                ...state,
                jobs: [...state.jobs, payload],
            };

        case GET_JOBS:
            return {
                ...state,
                jobs: payload,
            };

        case SORT_ASC:
            return {
                ...state,
                jobs: state.jobs.sort((a, b) => b.salary - a.salary),
            };

        case SORT_DEC:
            return {
                ...state,
                jobs: state.jobs.sort((a, b) => a.salary - b.salary),
            };

        default:
            return state;
    }
};
