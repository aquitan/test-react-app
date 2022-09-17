import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuthContext"
import Login from "../../pages/Login/Login"

const PublicRoute = () => {
    const { user } = useAuth()

    if (user) {
        return <Navigate to={'/contacts'} />
    }

    return <>
        <Outlet />
    </>
}

export default PublicRoute;