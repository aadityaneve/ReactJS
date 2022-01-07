import { INC_COUNT, DEC_COUNT, ADD_TODO } from './actionTypes.js';

export const reducer = (state, { type, payload }) => {
    //  if(action.type === 'INC_COUNT') { state.count = state.count + action.payload }

    switch (type) {
        case INC_COUNT:
            return { ...state, count: state.count + payload };
        case DEC_COUNT:
            return { ...state, count: state.count - payload };
        case ADD_TODO:
            return { ...state, todo: [...state.todo, payload] };
        default:
            return state;
    }

    /* if (action.type === 'INC_COUNT') {
        return { ...state, count: state.count + action.payload };
    }
    if (action.type === 'DEC_COUNT') {
        return { ...state, count: state.count - action.payload };
    }
    return state; */
};
