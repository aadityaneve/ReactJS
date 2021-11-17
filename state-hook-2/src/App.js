import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      <HookTimer />
      <ClassTimer />
      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
