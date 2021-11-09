import React, { Fragment } from "react";

function Columns() {
    const items = [
        {
            id: 1,
            title: "Name",
            name: "Aditya",
        },
        {
            id: 2,
            title: "Name",
            name: "Ronit",
        },
    ];
    return (
        <React.Fragment>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.name}</td>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}

export default Columns;
