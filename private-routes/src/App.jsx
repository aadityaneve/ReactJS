import './App.css';
import { AllRoutes } from './routes/AllRoutes';

function App() {
    return (
        <div
            className='App'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
            }}
        >
            <AllRoutes />
        </div>
    );
}

export default App;
