import { createContext } from "react";
import { AuthContextData } from "../models/models";


export const AuthContext = createContext<AuthContextData>({
    user: null,
    login: () => null,
    logout: () => null
})