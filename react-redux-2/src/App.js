import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { incCounter, decCounter } from './Store/actions';
import Todos from './Components/Todos';

function App() {
    /* const state = useSelector((state) => state);
    console.log('state:', state) */

    return (
        <div className='App'>
            {/* Todos */}
            <div>
                <Todos />
            </div>
            {/* Todos */}
        </div>
    );
}

export default App;
