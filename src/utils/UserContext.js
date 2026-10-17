import { createContext } from "react";

const UserContext = createContext({
    name: "abc",
    email: "example@gmail.com"
})

export default UserContext