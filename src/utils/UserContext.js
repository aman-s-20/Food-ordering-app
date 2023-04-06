import { createContext } from "react";


const userContext =createContext({
    user:{
        name : "aman",
        email : "singh@gmail.com"
    }
})

// userContext.displayName = "userContext";

export default userContext;