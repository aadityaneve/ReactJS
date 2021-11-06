import React from "react";

let heading = {
    color: "yellow",
    fontSize: "72px",
};

function InlineStyle() {
    return (
        <div>
            <h1 className="error">Error</h1>
            <h2 style={heading}>Aditya</h2>
        </div>
    );
}

export default InlineStyle;
