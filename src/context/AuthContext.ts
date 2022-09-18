import { createContext } from "react";
import { AuthContextData } from "../types/types";


export const AuthContext = createContext<AuthContextData>({
    user: null,
    login: () => null,
    logout: () => null
})