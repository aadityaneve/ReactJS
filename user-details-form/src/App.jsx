import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, TableComponent } from './components';

function App() {
    const [formData, setFormData] = useState([]);

    return (
        <div className='App' style={{backgroundColor: 'lightgrey'}}>
            <Form formData={formData} setFormData={setFormData} />
            <TableComponent formData={formData} />
        </div>
    );
}

export default App;
