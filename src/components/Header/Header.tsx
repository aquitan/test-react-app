import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useThemeContext } from "../../hooks/useThemeContext";
import SearchBar from "../searchBar/SearchBar";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ButtonCustom from "../ui/buttonCustom/ButtonCustom";
import { useAuth } from "../../hooks/useAuthContext";
import StyledNavLink from "../ui/styledNavLink/StyledNavLink";
import { useModal } from "../../hooks/useModal";
import CustomModal from "../customModal/CustomModal";

const Header = () => {
    const {themeMode, changeMode} = useThemeContext()
    const {open, toggleModal} = useModal()
    const {logout} = useAuth()

    const onThemeChange = () => {
        changeMode()
    }

    const onLogout = () => {
        logout()
    }

    return (
        <>
        <CustomModal open={open} title='Modal example' text='This is example of modal' handleClose={() => toggleModal(false)} />
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <StyledNavLink to='/contacts' text='Contacts' />
                        <StyledNavLink to='/readme' text='Readme' />
                        <ButtonCustom onClick={() => toggleModal(true)} color='info' type='button' variant='contained' text='Try modal?' />
                    </Typography>
                    <IconButton onClick={onThemeChange}>
                        {
                            themeMode === 'light' ? <Brightness4Icon color='inherit' /> : <Brightness7Icon color='warning' />
                        }
                    </IconButton>
                    <Box sx={{mx: 2}}>
                        <SearchBar/>
                    </Box>
                    <Box sx={{mx: 2}}>
                        <ButtonCustom onClick={onLogout} color='warning' type='button' variant='contained' text='Logout'  />
                    </Box>
                </Toolbar>
                
            </AppBar>
        </Box>
        </>
        
    )
}
export default Header;