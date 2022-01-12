import { INC_COUNTER, DEC_COUNTER } from './actionTypes';

export const incCounter = (value) => {
    return {
        type: INC_COUNTER,
        payload: value,
    };
};

export const decCounter = (value) => {
    return {
        type: DEC_COUNTER,
        payload: value,
    };
};
