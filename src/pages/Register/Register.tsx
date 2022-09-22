import { ErrorMessage } from "@hookform/error-message";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import ButtonCustom from "../../components/ui/buttonCustom/ButtonCustom";
import Input from "../../components/ui/input/Input";
import { LoginType } from "../../types/types";
import { emailValidate } from "../../utils/utils";

const Register = () => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const navigate = useNavigate()

    const onSubmit = async (data:LoginType) => {
        const res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (res.status === 201) {
            navigate('/')
        }
    }


    return (
        <Container maxWidth='sm'>
            <Paper elevation={3} sx={{p: 2, mt: 4}}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Typography component='h4' variant="h5" >
                        Register
                    </Typography>
                    <Box sx={{mt: 2}}>
                    <Controller 
                            control={control}
                            name='email'
                            rules={{
                                required: true,
                                validate: (email) => emailValidate(email)
                            }}
                            render={({
                                field: {onChange, value}
                            }) => (
                                <>
                                    <Input name='email' label="Email" value={value} type='text' onChange={onChange}/>
                                    <ErrorMessage 
                                    name={"email"} 
                                    errors={errors} 
                                    render={() => <Typography sx={{color: 'tomato', fontSize: 10}}>Check the field</Typography>} 
                                    />
                                </>
                            )}
                        />
                    </Box>
                    <Box sx={{mt: 2}}>
                        <Controller 
                            control={control}
                            name='password'
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: {onChange, value}
                            }) => (
                                <>
                                    <Input name='password' label="Password" value={value} type='password' onChange={onChange}/>
                                    <ErrorMessage 
                                    name={"password"} 
                                    errors={errors}
                                    render={() => <Typography sx={{color: 'tomato', fontSize: 10}}>Check the field</Typography>} 
                                    />
                                </>
                            )}
                        />
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