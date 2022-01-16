import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as TodoReducer } from '../features/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(TodoReducer);

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
