import { Box, Paper } from "@mui/material";
import ButtonCustom from "../ui/buttonCustom/ButtonCustom";
import AddIcon from '@mui/icons-material/Add'
import Input from "../ui/input/Input";
import React from "react";

type AddContactType = {
    name: string,
    phone: string,
    error: boolean,
    onSetContactValue: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleAddContact: () => void
}

const AddContact = ({name, error, phone, onSetContactValue, handleAddContact}:AddContactType) => {
    


    return (
        <Paper sx={{padding: 2, marginY: 2}} elevation={3}>
            <Box sx={{marginBottom: 2, width: '100%'}}>
                <Input error={error} required name='name' label="Name" value={name} type='text' onChange={(e) => onSetContactValue(e)}/>
            </Box>
            <Box sx={{marginBottom: 2}}>
                <Input error={error} required name='phone' label="Phone" value={phone} type='number' onChange={(e) => onSetContactValue(e)}/>
            </Box>
            <ButtonCustom startIcon={<AddIcon/>} text="Add Contact" type='button' variant='contained' color='primary' onClick={handleAddContact}/>    
        </Paper>
    )
}
export default AddContact;