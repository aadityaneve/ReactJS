import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
