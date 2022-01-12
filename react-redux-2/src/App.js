import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { incCounter, decCounter } from './features/Todos/actions';
import Todos from './components/Todos';
import Counter from './components/Counter';

function App() {
    return (
        <div className='App'>
            <Counter />

            <div>
                <Todos />
            </div>
        </div>
    );
}

export default App;
