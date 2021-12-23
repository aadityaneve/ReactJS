import logo from './logo.svg';
import './App.css';

function App() {
    const style = {
        color: 'red',
        fontSize: '50px',
        backgroundColor: 'brown',
    };

    const arr = [1, 2, 3, 4, 5];

    return (
        <div className='App'>
            <h1 style={style}>First React App</h1>
            <Todos props={arr} /> {/* Components */}
            <Todos props={arr} /> {/* Components */}
            <img src={logo} alt='image' />
        </div>
    );
}

function Todos({props}) {
  console.log(props)
    return (
        <div>
            {props.map((e) => (
                <h3>Todo: {e}</h3>
            ))}
        </div>
    );
}

export default App;
