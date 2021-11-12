import React, { useState } from "react";

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementByFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <div>
                <button onClick={() => setCount(initialCount)}>RESET</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
                <button onClick={incrementByFive}>Increment 5</button>
            </div>
        </div>
    );
}

export default HookCounterTwo;
