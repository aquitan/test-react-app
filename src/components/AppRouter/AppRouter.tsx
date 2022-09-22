import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom"
import Readme from "../../pages/readme/Readme";
import Contacts from "../../pages/contacts/Contacts";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import { ProtectedLayout } from "../protectedRoute/ProtectedRoute";
import PublicRoute from "../publicRoute/PublicRoute";

const AppRouter = () => {

    return (
        <Paper sx={{minHeight: '100vh', pb: 5}}>
            <Routes>
                <Route path={'/'} element={<PublicRoute/>} >
                    <Route path='' element={<Login/>} />
                    <Route path='register' element={<Register/>} />
                </Route>

                <Route path="/" element={<ProtectedLayout />}>
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="readme" element={<Readme />} />
                </Route>
            </Routes>
        </Paper>
    )
}

export default AppRouter;