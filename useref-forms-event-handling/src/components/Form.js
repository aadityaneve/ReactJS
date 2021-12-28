import React, { useState, useRef } from 'react';

const Form = () => {
    const [form, setForm] = useState({});
    // const [form, setForm] = useState({
    //     username: '',
    //     age: '',
    //     address: '',
    // });
    const ref = useRef(null);

    const handleChange = (e) => {
        console.log(ref.current.files);

        // console.log(e.target.name, e.target.value)
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                name='username'
                type='text'
                placeholder='Enter name'
            />
            <input
                onChange={handleChange}
                name='age'
                type='number'
                placeholder='Enter age'
            />
            <input
                onChange={handleChange}
                name='address'
                type='text'
                placeholder='Enter address'
            />

            <input onChange={handleChange} ref={ref} name='file' type='file' />

            <input type='submit' value='submit' />
        </form>
    );
};

export default Form;
