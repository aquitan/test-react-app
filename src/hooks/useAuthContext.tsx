import { useContext, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { AuthContextData, FetchingUser, LoginType } from "../models/models"
import { useLocalStorage } from "./useLocalStorage"



type AuthContextProviderTypes = {
    children: React.ReactNode,
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}:AuthContextProviderTypes) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const getUsers = async (data:LoginType) => {
        const res = await fetch('http://localhost:3001/users')
        const datas = await res.json()
        if (datas.length) {
            datas.forEach((item:FetchingUser) => {
                if (item.email === data.email) {
                    console.log('item.email === data.email', item.email === data.email);
                    setUser(data)
                    navigate('/contacts')
                }
            })
        }
    }
    
    const login = async (data:LoginType) => {
        await getUsers(data)
    }

    const logout = async () => {
        setUser(null)
        navigate('/')
    }

    const value = useMemo(():AuthContextData => ({
        login, 
        logout, 
        user
    }), [user])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}