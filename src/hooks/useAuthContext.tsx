import { useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { AuthContextData, FetchingUser, LoginType } from "../types/types"
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
        try {
            const res = await fetch('http://localhost:3001/users')
            const datas = await res.json()
            if (datas.length) {
                let usrs = datas.filter((item:FetchingUser) => item.email === data.email)
                if (usrs.length) {
                    console.log('users', usrs);
                    setUser(data)
                    navigate('/contacts')
                } else {
                    navigate('/register')
                }
            }
        } catch (err) {
            console.log(err)
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