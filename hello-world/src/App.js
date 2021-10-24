import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Aditya" heroName="IronMan">
        <p>This is children props</p>
      </Greet>
      <Greet name="Ronit" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Chiku" heroName="Superman" />
      <hr />
      <Welcome name="Aditya" heroName="IronMan">
        <button>Hello</button>
        <p>Bye</p>
      </Welcome>
      <Welcome name="Ronit" heroName="Batman">
        <input type="date" />
      </Welcome>
      <Welcome name="Chiku" heroName="Superman" />
    </div>
  );
}

export default App;
