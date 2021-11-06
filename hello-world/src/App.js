import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import InlineStyle from "./components/InlineStyle";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <Stylesheet primary={true} />
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick />
      <Message />
      <Counter />
      <Greet name="Aditya" heroName="IronMan">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Ronit" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Chiku" heroName="Superman" />
      <hr />
      <Welcome name="Aditya" heroName="IronMan">
        <button>Hello</button>
        <p>Bye</p>
      </Welcome>
      <Welcome name="Chiku" heroName="Superman" /> */}
      {/* <Welcome name="Ronit" heroName="Batman">
        <input type="date" />
      </Welcome> */}
    </div>
  );
}

export default App;
