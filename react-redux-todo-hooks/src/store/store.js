import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as TodoReducer } from '../features/reducer';
import thunk from 'redux-thunk';

export const store = createStore(
    TodoReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
