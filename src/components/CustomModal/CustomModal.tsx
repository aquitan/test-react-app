import { Box, Modal, Paper, Typography } from "@mui/material";
import ButtonCustom from "../ui/buttonCustom/ButtonCustom";

type CustomModalType = {
    open: boolean,
    title: string,
    text: string,
    handleClose: () => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #eee',
    boxShadow: 24,
    p: 2,
  };

const CustomModal = ({open, handleClose, title, text}:CustomModalType) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Paper elevation={1} sx={style}>
                <Typography align="center" sx={{marginBottom: 4}} id="modal-modal-title" variant="h6" component="h2">
                {title}
                </Typography>
                <Typography align="center" id="modal-modal-description">
                {text}
                </Typography>
                <Box sx={{mt: 4, textAlign: 'right'}}>
                    <ButtonCustom onClick={handleClose} color='info' type='button' text="Close" variant='contained' />
                </Box>
            </Paper>
        </Modal>
    )
}

export default CustomModal;