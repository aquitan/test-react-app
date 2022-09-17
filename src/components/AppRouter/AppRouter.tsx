import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom"
import Readme from "../../pages/Readme/Readme";
import Contacts from "../../pages/Contacts/Contacts";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { ProtectedLayout } from "../ProtectedRoute/ProtectedRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const AppRouter = () => {

    return (
        <Paper sx={{minHeight: '120vh', pb: 5}}>
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