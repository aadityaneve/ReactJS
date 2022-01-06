import React, {useState, useContext} from 'react';
import { useNavigate, useLocation, useSearchParams} from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext'

const Login = () => {
    const [form, setForm] = useState({});

    const { handleToken } = useContext(AuthContext)

    const navigate = useNavigate();
    console.log('navigate:', navigate)

    const location = useLocation();
    console.log('location:', location)

    const handleChange = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <div>
            <input
                name='email'
                onChange={handleChange}
                type='text'
                placeholder='Enter Email'
            />
            <input
                name='password'
                onChange={handleChange}
                type='text'
                placeholder='Enter Password'
            />
            <button onClick={() => {
                try {

                    fetch('https://reqres.in/api/login')
                    .then((response) => {
                        return response.json();
                    })
                    .then((response) => {
                        handleToken(response)
                    })

                    // handleToken('kughf8764837juh')
                    // navigate('/users')
                    // navigate('/')
                    navigate(-1)
                }catch(error){
                    console.log(error)
                }
            }}>Sign In</button>
        </div>
    );
};

export default Login;
