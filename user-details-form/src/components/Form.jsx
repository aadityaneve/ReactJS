import React, { useState } from 'react';
import {
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Input,
    Button,
} from '@mui/material';

import App from '../App';
import { TableComponent } from '.';

import { v4 as uuidv4 } from 'uuid';

const Form = ({ formData, setFormData }) => {
    const [fillForm, setFillForm] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            userName,
            age,
            address,
            department,
            salary,
            maritalStatus,
            profilePhoto,
        } = e.target;

        let userForm = {
            id: uuidv4(),
            userName: userName.value,
            age: age.value,
            address: address.value,
            department: department.value,
            salary: salary.value,
            maritalStatus: maritalStatus.value,
            profilePhoto: profilePhoto.value,
        };

        setFormData([...formData, userForm]);
    };

    const formStyle = {
        position: 'absolute',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '70vh',
        width: '50%',
        marginLeft: '130px',
        backgroundColor: 'whitesmoke',
        padding: '3%',
    };

    const input = {
        display: 'none',
    };

    const handleForm = () => {
        setFillForm((prevState) => !prevState);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Button
                sx={{ alignItems: 'flex-start' }}
                onClick={handleForm}
                variant='contained'
                color={fillForm ? 'error' : 'success'}
            >
                Fill Form
            </Button>
            {fillForm ? (
                <form onSubmit={handleSubmit} style={formStyle}>
                    <TextField name='userName' type='text' label='Name' />
                    <TextField name='age' type='number' label='Age' />
                    <TextField name='address' type='text' label='Address' />

                    <FormControl>
                        <InputLabel id='department'>Department</InputLabel>
                        <Select
                            name='department'
                            labelId='department'
                            label='Department'
                        >
                            <MenuItem value='front-end'>Front-End</MenuItem>
                            <MenuItem value='back-end'>Back-End</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField name='salary' label='Salary' />

                    <FormControl>
                        <InputLabel id='maritalStatus'>
                            Marital Status
                        </InputLabel>
                        <Select
                            name='maritalStatus'
                            labelId='maritalStatus'
                            label='Marital Status'
                        >
                            <MenuItem value='single'>Single</MenuItem>
                            <MenuItem value='married'>Married</MenuItem>
                        </Select>
                    </FormControl>

                    <label htmlFor='contained-button-file'>
                        <Input
                            name='profilePhoto'
                            style={input}
                            accept='image/*'
                            id='contained-button-file'
                            multiple
                            type='file'
                        />
                        <Button variant='contained' component='span'>
                            Upload Profile Photo
                        </Button>
                    </label>

                    <Button type='submit' variant='contained' color="success">
                        Submit
                    </Button>
                </form>
            ) : null}
        </div>
    );
};

export default Form;
