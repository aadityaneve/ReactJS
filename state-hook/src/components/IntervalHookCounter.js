import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    
    useEffect(() => {
        function doSomething(someProp) {
            console.log(someProp)
        }
        doSomething("hi")

        const interval = setInterval(tick, 1000)

        // clean up code
        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter
