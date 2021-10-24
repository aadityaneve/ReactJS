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
      <Greet name="Ronit" heroName="Batman" />
      <Greet name="Chiku" heroName="Superman" />
      <Welcome />
    </div>
  );
}

export default App;
