import {
    REQRES_AUTH,
    SET_JOB,
    GET_JOBS,
    SORT_ASC,
    SORT_DEC,
    APPLIED_JOBS
} from './actionTypes';

const init = {
    authToken: '',
    jobs: [],
    appliedJobs: [],
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

        case APPLIED_JOBS:
            return {
                ...state,
                appliedJobs: payload,
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
