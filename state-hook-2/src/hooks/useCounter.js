import {useState} from 'react'

function useCounter(initialCount = 0, incrementBy) {
    const [count, setCount] = useState(initialCount, incrementBy);

    const increment = () => {
        setCount((prevCount) => prevCount + incrementBy);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - incrementBy);
    };

    const reset = () => {
        setCount(0);
    };

    return [count, increment, decrement, reset];
}

export default useCounter
