import { createContext } from "react";


const UserContext =createContext({
    user:{
        name : "aman",
        email : "singh@gmail.com"
    }
})

UserContext.displayName = "UserContext";

export default UserContext;