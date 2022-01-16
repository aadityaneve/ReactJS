import { createStore } from 'redux';
import { reducer as TodoReducer } from '../features/Todo/reducer';

export const store = createStore(
    TodoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
