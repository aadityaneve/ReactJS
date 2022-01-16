import './App.css';

import { Routes, Route } from 'react-router-dom';
import Todos from './components/Todos';
import TodoDetails from './components/TodoDetails';
import CompletedTodos from './components/CompletedTodos';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Todos />}></Route>
                <Route path='/todos/:id' element={<TodoDetails />}></Route>
                <Route path='/completed-todos' element={<CompletedTodos />}></Route>
            </Routes>
        </div>
    );
}

export default App;
