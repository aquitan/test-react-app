import { Box } from "@mui/material"
import ButtonCustom from "../UI/ButtonCustom/ButtonCustom"
import Input from "../UI/Input/Input"
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import React from "react";

type EditTypes = {
    editedName: string,
    editedPhone: string,
    id: number,
    name: string,
    phone: string,
    onEditChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    onHandleSaveEdit: (id: number) => void,
    onCancelEdit: (id: number) => void
}

const ContactsEdit = ({editedName, editedPhone, name, phone, onEditChange, onHandleSaveEdit, onCancelEdit, id}:EditTypes) => {
    return (
        <Box>
            <Box sx={{marginBottom: 2, width: '100%'}}>
                <Input name='name' label={name} value={editedName} type='text' onChange={(e) => onEditChange(e)} />
            </Box>
            <Box sx={{marginBottom: 2, width: '100%'}}>
                <Input name='phone' label={phone} value={editedPhone} type='text' onChange={(e) => onEditChange(e)} />
            </Box>
            <ButtonCustom startIcon={<SaveIcon />} text='' type='button' variant="outlined" color='success' onClick={() => onHandleSaveEdit(id)} />
            <ButtonCustom startIcon={<CancelIcon />} text='' type='button' variant="outlined" color='warning' onClick={() => onCancelEdit(id)}  />
        </Box>
    )
}
export default ContactsEdit;