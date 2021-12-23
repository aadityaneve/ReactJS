import React from 'react';

const List = ({ props }) => {
    console.log('props:', props);

    return (
        <>
            {props.map((e, index) => {
                return <li key={index}>{e}</li>;
            })}
        </>
    );
};

export default List;
