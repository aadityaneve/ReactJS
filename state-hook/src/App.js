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
import React from "react";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
    return (
        <div className="App">
          <CounterTwo />
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
    );
}

export default App;
