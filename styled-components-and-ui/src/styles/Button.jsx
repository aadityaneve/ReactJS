import styled from 'styled-components';

export const SButton = styled.button`
    /* CSS Syntax */
    color: ${(props) => (props.theme === 'light' ? '#fe7e6d' : '#FEECE9')};
    background: ${(props) => (props.theme === 'light' ? '#FEECE9' : '#fe7e6d')};
    border: 1px solid #f58840;
    cursor: pointer;
    padding: 10px;
    border-radius: 3px;
    border: none;
    box-shadow: -1px 2px 2px 1px
        ${(props) => (props.theme === 'light' ? '#fe7e6d' : '#FEECE9')};
`;

export const Div = styled.div`
    display: flex;
    background-color: lightgrey;
    justify-content: center;
    color: #8b9a46;
    padding: 10px;

    /* & will represent this div */

    & > p {
        color: red;
    }

    & > p:hover {
        color: #8b9a46;
    }
`;
