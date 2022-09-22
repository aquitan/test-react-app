import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthContext";
import Header from "../header/Header";


export const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
};