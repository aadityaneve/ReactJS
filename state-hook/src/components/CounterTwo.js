import React, {useReducer} from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
const reducer = (state, action) => {
    
    switch (action.type){
        case "increment": return {...state, firstCounter: state.firstCounter + action.value};
        case "decrement": return {...state, firstCounter: state.firstCounter - action.value};
        case "increment2": return {...state, secondCounter: state.secondCounter + action.value};
        case "decrement2": return {...state, secondCounter: state.secondCounter - action.value};
        case "reset": return initialState;
        default: return state;
    }

}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState); // dispatch

    return (
        <div>
            <h1>First Counter : {count.firstCounter}</h1>
            <h1>Second Counter : {count.secondCounter}</h1>
            <button onClick={() => dispatch({type: "increment", value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement", value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: "increment", value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: "decrement", value: 5})}>Decrement 5</button><br />
            <button onClick={() => dispatch({type: "increment2", value: 1})}>Increment Counter 2</button>
            <button onClick={() => dispatch({type: "decrement2", value: 1})}>Decrement Counter 2</button>
            <button onClick={() => dispatch({type: "reset"})}>RESET</button>
        </div>
    )
}

export default CounterTwo
