import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { incCounter, decCounter } from '../features/Counter/actions';

const Counter = () => {
    const { counter } = useSelector((state) => state.counterState);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={() => dispatch(incCounter(1))}>INC</button>
            <button onClick={() => dispatch(decCounter(1))}>DEC</button>
        </div>
    );
};

export default Counter;
