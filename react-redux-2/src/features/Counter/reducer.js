import { INC_COUNTER, DEC_COUNTER } from './actionTypes';

const init = {
    counter: 0,
};

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case INC_COUNTER:
            return {
                ...state,
                counter: state.counter + payload,
            };

        case DEC_COUNTER:
            return {
                ...state,
                counter: state.counter - payload,
            };

        default:
            return state;
    }
};
