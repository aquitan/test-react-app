import { Box, Paper, Typography } from "@mui/material";
import ButtonCustom from "../ui/buttonCustom/ButtonCustom";
import AddIcon from '@mui/icons-material/Add'
import Input from "../ui/input/Input";
import { Controller, useForm } from "react-hook-form";
import { phoneValidate } from "../../utils/utils";
import { ErrorMessage } from "@hookform/error-message";
import { AddContactDataType } from "../../types/types";

type AddContactType = {
    handleAddContact: (data:AddContactDataType) => void
}

const AddContact = ({handleAddContact}:AddContactType) => {
    const {control, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {
            name: '',
            phone: ''
        }
    })

    const submit = (data:AddContactDataType) => {
        handleAddContact(data)
        reset({name: '', phone: ''})
    }

    return (
        <Paper sx={{padding: 2, marginY: 2}} elevation={3}>
            <Box sx={{marginBottom: 2, width: '100%'}}>
                <Box sx={{mt: 2}}>
                        <Controller 
                            control={control}
                            name='name'
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: {onChange, value}
                            }) => (
                                <>
                                    <Input required name='name' label="Name" value={value} type='text' onChange={onChange}/>
                                    <ErrorMessage 
                                    name={"name"} 
                                    errors={errors}
                                    render={() => <Typography sx={{color: 'tomato', fontSize: 10}}>Check the field</Typography>} 
                                    />
                                </>
                            )}
                        />
                    </Box>
            </Box>
            <Box sx={{marginBottom: 2}}>
                <Controller 
                    control={control}
                    name='phone'
                    rules={{
                        required: true,
                        validate: (phone) => phoneValidate(phone)
                    }}
                    render={({
                        field: {onChange, value}
                    }) => (
                        <>
                            <Input required name='phone' label="Phone" value={value} type='text' onChange={onChange}/>
                            <ErrorMessage 
                            name={"phone"} 
                            errors={errors} 
                            render={() => <Typography sx={{color: 'tomato', fontSize: 10}}>Phone number is not valid</Typography>} 
                            />
                        </>
                    )}
                />
            </Box>
            <ButtonCustom startIcon={<AddIcon/>} text="Add Contact" type='button' variant='contained' color='primary' onClick={handleSubmit(submit)}/>    
        </Paper>
    )
}
export default AddContact;