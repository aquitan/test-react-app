import { Box, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import ButtonCustom from "../../components/UI/ButtonCustom/ButtonCustom";
import Input from "../../components/UI/Input/Input";

const Register = () => {
    const [inputValue, setInputValue] = useState({email: '', password: ''})

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const obj = {
            email: inputValue.email,
            password: inputValue.password,
            id: 3
        }
        const res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        })
        const data = await res.json()
    }


    return (
        <Container maxWidth='sm'>
            <Paper elevation={3} sx={{p: 2, mt: 4}}>
                <Form onSubmit={onSubmit}>
                    <Typography component='h4' variant="h5" >
                        Register
                    </Typography>
                    <Box sx={{mt: 2}}>
                        <Input name='email' label="Email" value={inputValue.email} type='text' onChange={onChange}/>
                    </Box>
                    <Box sx={{mt: 2}}>
                        <Input name='password' label="Password" value={inputValue.password} type='password' onChange={onChange}/>
                    </Box>
                    <Box sx={{mt: 2, textAlign: 'center'}}>
                        <ButtonCustom type="submit" color='success' variant={'contained'} text='Register' />
                    </Box>
                </Form>
                <Box>
                    <Typography>
                        <Link to='/'>To log in</Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}
export default Register;