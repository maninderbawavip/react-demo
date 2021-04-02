import { createContext } from "react";

const UserContext = createContext() // storage

export const UserProvider = UserContext.Provider; // provide some value
// export const UserConsumer = UserContext.Consumer; // consumer will use this value

export default UserContext;


