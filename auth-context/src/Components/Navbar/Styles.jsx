import styled from 'styled-components';

const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: coral;
    color: black;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 3px;
    background-color: purple;
    font-size: 24px;
    cursor: pointer;
`;

export { Nav, Button };
