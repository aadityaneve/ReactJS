import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Aditya" />
      <Greet name="Ronit" />
      <Greet name="Chiku" />
      <Welcome />
    </div>
  );
}

export default App;
