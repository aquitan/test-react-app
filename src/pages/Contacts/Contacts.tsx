import React, { useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Contact } from "../../types/types";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { addContact, cancelEdit, editContact, removeContact, saveEdited } from "../../store/slices/contactsSlice";
import ContactsItem from "../../components/ContactsItem/ContactsItem";
import Header from "../../components/Header/Header";
import AddContact from "../../components/AddContact/AddContact";
import { useModal } from "../../hooks/useModal";
import CustomModal from "../../components/CustomModal/CustomModal";

const Contacts = () => {
    const [contactVal, setContactVal] = useState({name: '', phone: ''})
    const [editedValue, setEditedValue] = useState({name: '', phone: ''})
    const [error, setError] = useState(false)
    const {open, toggleModal} = useModal()
    const value = useSelector((state:RootState) => state.contacts)
    const searchValue = useSelector((state:RootState) => state.filteredContacts)
    const dispatch = useDispatch()

    const onSetContactValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setContactVal({...contactVal, [e.target.name]: e.target.value})
    }

    const handleAddContact = () => {
        if (contactVal.name && contactVal.phone) {
            dispatch(addContact(contactVal))
            setContactVal({name: '', phone: ''})
        } else {
            setError(true)
            toggleModal()
        }
    }

    const handleRemoveClick = (id:number) => {
        dispatch(removeContact(id))
    }

    const handleEditClick = (id:number) => {
        dispatch(editContact(id))
    }

    const onHandleSaveEdit = (id:number) => {
        let obj = {
            name: editedValue.name,
            phone: editedValue.phone,
            id
        }
        dispatch(saveEdited(obj))
        setEditedValue({name: '', phone: ''})
    }
    const onEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedValue({...editedValue, [e.target.name]: e.target.value})
    }
    const onCancelEdit = (id:number) => {
        dispatch(cancelEdit(id))
    }

    const filtered = value.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))
    
    return (
        <>
            <CustomModal open={open} title='Empty fields' text='You have to pass values to the fields' handleClose={toggleModal} />
            <Container maxWidth='lg'>
                <Typography sx={{my: 2}} variant='h3' component='h3'>Contacts</Typography>
                <AddContact error={error} name={contactVal.name} phone={contactVal.phone} onSetContactValue={onSetContactValue} handleAddContact={handleAddContact} />
                <Grid container spacing={2}>
                    { 
                        value.length ? 
                            filtered.map((contact:Contact) => {
                                return (
                                    <Grid key={contact.id} item xs={6}>
                                        <ContactsItem 
                                        name={contact.name} 
                                        phone={contact.phone}
                                        id={contact.id} 
                                        isEdit={contact.isEdit}
                                        editedValue={editedValue}
                                        onEditChange={onEditChange}
                                        onHandleSaveEdit={onHandleSaveEdit}
                                        handleRemoveClick={handleRemoveClick} 
                                        handleEditClick={handleEditClick}
                                        onCancelEdit={onCancelEdit}
                                        />
                                    </Grid>
                                )
                        }) : null
                    }
                </Grid>
                {
                    !value.length ? 
                        <Paper elevation={3} sx={{p: 1, my: 2}}>
                            <Typography sx={{my: 2, textAlign: 'center'}} variant="h5" component="h5">Add contact</Typography>
                        </Paper>
                    : null
                }
                
            </Container>
        </>
    )
}
export default Contacts;