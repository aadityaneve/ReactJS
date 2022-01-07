// const { createStore } = require('redux');
import { createStore } from 'redux';
import { reducer } from './reducer.js';
import { INC_COUNT, DEC_COUNT, ADD_TODO } from './actionTypes.js';
import { incCountAction, decCountAction, addTodoAction } from './actions.js';

const init = { count: 0, todo: [] };

const store = createStore(reducer, init);

console.log(store.getState());

store.dispatch(incCountAction);
store.dispatch(incCountAction);
store.dispatch(incCountAction);
store.dispatch(incCountAction);

console.log(store.getState());

store.dispatch(decCountAction);

console.log(store.getState());

store.dispatch(addTodoAction);
store.dispatch(addTodoAction);

console.log(store.getState());
/* store.dispatch({
    type: 'ADD_TODO',
    payload: { title: 'Learn Redux', status: false },
}); */

/* class Store {
    constructor(reducer, init) {
        this.reducer = reducer;
        this.state = init;
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
} */

// Actions are always an object.

//const action = { type: '', payload: '' }; // Fixed Structure, Payload optional
/* const incCountAction = { type: INC_COUNT, payload: 1 };
const decCountAction = { type: DEC_COUNT, payload: 1 };
const addTodoAction = {
    type: 'ADD_TODO',
    payload: { id: 1, title: 'Learn Redux', status: false },
}; */
/* const updateTodoAction = {
    type: 'UPDATE_TODO',
    payload: { id: 3, title: 'Learn React Redux', status: false },
};
 */

/* // Pure Function
const reducer = ( store, action ) => { // Fixed Structure

}
*/
// const reducer = (state, { type, payload }) => {
//     //  if(action.type === 'INC_COUNT') { state.count = state.count + action.payload }

//     switch (type) {
//         case 'INC_COUNT':
//             return { ...state, count: state.count + action.payload };

//         case 'DEC_COUNT':
//             return { ...state, count: state.count - action.payload };
//         case 'ADD_TODO':
//             return { ...state, todo: [...state.todo, payload] };
//         default:
//             return state;
//     }

//     /* if (action.type === 'INC_COUNT') {
//         return { ...state, count: state.count + action.payload };
//     }
//     if (action.type === 'DEC_COUNT') {
//         return { ...state, count: state.count - action.payload };
//     }
//     return state; */
// };

/* const incCount = (data) => {
    return { type: DEC_COUNT, payload: data };
}; */

/* const init = { count: 0} */

// const store = new Store( reducer, init) // Fixed Structure
// Fixed Structure

// store.dispatch(action)
