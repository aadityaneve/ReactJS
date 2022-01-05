import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Products from './Components/Products/Products';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<h1>HOME PAGE</h1>}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route
                    path='/products/:id'
                    element={<ProductDetails />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
