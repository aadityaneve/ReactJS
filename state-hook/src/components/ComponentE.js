import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>

            <h1>
                Name: {user} {" "} Channel: {channel}

            </h1>

            <ComponentF />
        </div>
    );
}

export default ComponentE;
