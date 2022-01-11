import { ADD_TODO, UPDATE_STATUS } from './actionTypes';

const initState = {
    todos: [
        {
            id: 1,
            title: 'LEARN REDUX',
            status: false,
        },
    ],
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        }

        case UPDATE_STATUS: {
            console.log(state);
            return {
                ...state,
                todos: [
                    ...state.todos,
                    state.todos.map((todo) =>
                        todo.id === payload.id
                            ? (todo.status = payload.status)
                            : null
                    ),
                ],
            };
        }

        default:
            return state;
    }
};

export { reducer };
