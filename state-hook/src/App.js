import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import React, { useReducer } from "react";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA1 from "./components/ComponentA1";
import ComponentB1 from "./components/ComponentB1";
import ComponentC1 from "./components/ComponentC1";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
        >
            <div className="App">
                <h1>Count: {count} </h1>
                <ComponentA1 />
                <ComponentB1 />
                <ComponentC1 />
                {/* <CounterThree /> */}
                {/* <CounterTwo /> */}
                {/* <CounterOne /> */}
                {/* <UserContext.Provider value={"Aditya"}>
              <ChannelContext.Provider value={"Neve"}>
                <ComponentC />
              </ChannelContext.Provider>
            </UserContext.Provider> */}
                {/* <DataFetching /> */}
                {/* <IntervalHookCounter /> */}
                {/* <IntervalClassCounter /> */}
                {/* <MouseContainer /> */}
                {/* <HookMouse /> */}
                {/* <ClassMouse /> */}
                {/* <HookCounterOne /> */}
                {/* <ClassCounterOne /> */}
                {/* <HookCounterFour /> */}
                {/* <HookCounterThree /> */}
                {/* <HookCounterTwo /> */}
                {/* <HookCounter /> */}
                {/* <ClassCounter /> */}
            </div>
        </CountContext.Provider>
    );
}

export default App;
