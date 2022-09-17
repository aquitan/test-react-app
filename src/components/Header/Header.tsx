import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useThemeContext } from "../../hooks/useThemeContext";
import SearchBar from "../SearchBar/SearchBar";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ButtonCustom from "../UI/ButtonCustom/ButtonCustom";
import { useAuth } from "../../hooks/useAuthContext";
import StyledNavLink from "../UI/StyledNavLink/StyledNavLink";

const Header = () => {
    const {themeMode, changeMode} = useThemeContext()
    const {logout} = useAuth()

    const onThemeChange = () => {
        changeMode()
    }

    const onLogout = () => {
        logout()
    }

    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <StyledNavLink to='/contacts' text='Contacts' />
                        <StyledNavLink to='/readme' text='Readme' />
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
    )
}
export default Header;