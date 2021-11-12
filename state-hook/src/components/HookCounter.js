import React, {useState} from 'react'

function HookCounter() {

    // useState method will return a pair of values
    // const [current value of the state property, method] = useState(initial value)
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
