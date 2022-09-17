import { Box, Container, Paper, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import Form from "../../components/Form/Form"
import ButtonCustom from "../../components/UI/ButtonCustom/ButtonCustom"
import Input from "../../components/UI/Input/Input"
import { useAuth } from "../../hooks/useAuthContext"
import { LoginType } from "../../models/models"

const Login = () => {
    const value = useAuth()
    // const [inputValue, setInputValue] = useState({email: '', password: ''})
    const {control, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    // const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue({...inputValue, [e.target.name]: e.target.value})
    // }

    const onSubmit = (data:LoginType) => {
        console.log('login data', data)
        value.login(data)
    }

    return (
        <Container maxWidth='sm'>
            <Paper elevation={3} sx={{p: 2, mt: 4}}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Typography component='h4' variant="h5" >
                        Login
                    </Typography>
                    <Box sx={{mt: 2}}>
                        <Controller 
                            control={control}
                            name='email'
                            render={({
                                field: {onChange, value}
                            }) => (
                                <Input name='email' label="Email" value={value} type='text' onChange={onChange}/>
                            )}
                        />
                        
                    </Box>
                    <Box sx={{mt: 2}}>
                        <Controller 
                            control={control}
                            name='password'
                            render={({
                                field: {onChange, value}
                            }) => (
                                <Input name='password' label="Password" value={value} type='password' onChange={onChange}/>
                            )}
                        />
                    </Box>
                    <Box sx={{mt: 2, textAlign: 'center'}}>
                        <ButtonCustom type="submit" color='success' variant={'contained'} text='Login' />
                    </Box>
                </Form>
                <Box>
                    <Typography>
                        <NavLink to='/register'>Create account</NavLink>
                    </Typography>
                </Box>
            </Paper>
        </Container>
        
    )
}

export default Login;