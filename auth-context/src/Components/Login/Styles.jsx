import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 30px;
    width: 300px;
    height: 250px;
    background-color: lightgrey;
    color: black;
    font-size: 25px;
`;

const Input = styled.input`
    height: 30px;
    border: none;
    border-bottom: 1px solid grey;
    background-color: white;
    color: black;
    font-size: 18px;
`;

export { Form, Input };
