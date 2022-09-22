import { Box, Paper } from '@mui/material';
import { ContactItem } from '../../types/types';
import ContactsEdit from '../contactsEdit/ContactsEdit';
import ContactsInfo from '../contactsInfo/ContactsInfo';


const ContactsItem = ({id, name, phone, isEdit, editedValue, handleRemoveClick, handleEditClick, onEditChange, onHandleSaveEdit, onCancelEdit}:ContactItem) => {

    return (
        <Paper sx={{padding: 2, mt: 2}} elevation={2}>
            <Box sx={{my: 2}} key={id}>
                {
                    isEdit ? 
                        <ContactsEdit id={id} name={name} phone={phone} editedName={editedValue.name} editedPhone={editedValue.phone} onEditChange={onEditChange} onHandleSaveEdit={onHandleSaveEdit} onCancelEdit={onCancelEdit}/> :
                        <ContactsInfo id={id} name={name} phone={phone} handleRemoveClick={handleRemoveClick} handleEditClick={handleEditClick} />
                }
            </Box>
        </Paper>
    )
}
export default ContactsItem;