import Styled from 'styled-components';

export const Nav = Styled.div`

    display: flex;
    justify-content: space-evenly;

    padding: 5px;
    background-color: brown;
    font-size: 24px;
    font-weight: bold;

    & > a {
        text-decoration: none;
        color: white;
    }

    & > a:hover {
        color: black;
    }
`;
