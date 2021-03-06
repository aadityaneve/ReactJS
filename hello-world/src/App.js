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
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
    return (
        <div className="App">
          <UserProvider value="Aditya">
            <ComponentC />
          </UserProvider>
            {/* <CounterTwo>
                {(count, incrementCount) => (
                    <ClickCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </CounterTwo>
            <CounterTwo>
                {(count, incrementCount) => (
                    <HoverCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </CounterTwo> */}
            {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? "Aditya" : "Guest"} /> */}
            {/* <ClickCounter name="Aditya" /> */}
            {/* <HoverCounter /> */}
            {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
            {/* <PortalDemo /> */}
            {/* <FRParentInput /> */}
            {/* <FocusInput /> */}
            {/* <RefsDemo /> */}
            {/* <ParentComp /> */}
            {/* <PureComp /> */}
            {/* <Table /> */}
            {/* <FragmentDemo /> */}
            {/* <LifecycleA /> */}
            {/* <Form /> */}
            {/* <h1 className="error">Error</h1> */}
            {/* <h1 className={styles.success}>Success</h1> */}
            {/* <InlineStyle /> */}
            {/* <Stylesheet primary={true} /> */}
            {/* <NameList /> */}
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
