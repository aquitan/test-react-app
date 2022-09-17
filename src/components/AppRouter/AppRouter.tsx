import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom"
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { ProtectedLayout } from "../ProtectedRoute/ProtectedRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const AppRouter = () => {

    return (
        <Paper sx={{minHeight: '100vh'}}>
            <Routes>
                <Route path={'/'} element={<PublicRoute/>} >
                    <Route path='' element={<Login/>} />
                    <Route path='register' element={<Register/>} />
                </Route>

                <Route path="/" element={<ProtectedLayout />}>
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Paper>
    )
}

export default AppRouter;