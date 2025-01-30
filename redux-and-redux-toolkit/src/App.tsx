import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from './redux-toolkit/counter-slice.';

import { RootState } from './redux-toolkit/store';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(incrementCounter(1))}>INC</button>
      <button onClick={() => dispatch(decrementCounter(1))}>DEC</button>
    </>
  );
}

export default App;
