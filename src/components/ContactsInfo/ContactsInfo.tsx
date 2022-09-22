import { Box, Typography } from "@mui/material";
import ButtonCustom from "../ui/buttonCustom/ButtonCustom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type ContactsInfoType = {
    name: string,
    phone: string,
    id: number,
    handleRemoveClick: (id:number) => void,
    handleEditClick: (id:number) => void
}

const ContactsInfo = ({name, phone, id, handleRemoveClick, handleEditClick}:ContactsInfoType) => {
    return (
        <Box>
            <Box sx={{borderBottom: '1px solid #cecece', my: 1, width: '100%', px: 2}}>
                <Typography sx={{my: 1}} variant='h5' component='h5'>{name}</Typography>
                <Typography sx={{color: '#7c7979'}}>Phone: {phone}</Typography>
            </Box>
            <Box>
                <ButtonCustom startIcon={<DeleteIcon />} text='' type='button' variant="outlined" color='warning' onClick={() => handleRemoveClick(id)} />
                <ButtonCustom startIcon={<EditIcon />} text='' type='button' variant="outlined" color='info' onClick={() => handleEditClick(id)} />
            </Box>
        </Box>
    )
}

export default ContactsInfo;