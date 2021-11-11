import React from "react";

// Default value is passed inside createContext
// If you want to pass a specific value, you can pass it to userProvider
// userConsumer consumes the value
const UserContext = React.createContext("NEVE");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
