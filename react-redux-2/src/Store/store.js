import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as TodoReducer } from '../features/Todos/reducer';
import { reducer as CounterReducer } from '../features/Counter/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counterState: CounterReducer,
    todoState: TodoReducer,
});

// function middleware(req, res, next)

// Middleware
/* function logger1(store) {
    return function (next) {
        return function (actions) {};
    };
} */

/* const logger1 = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch);
    }

    next(action);
}; */

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* export const store = createStore(
    rootReducer,
    applyMiddleware(logger1)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */
