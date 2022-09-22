import React, { useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { AddContactDataType, Contact } from "../../types/types";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { addContact, cancelEdit, editContact, removeContact, saveEdited } from "../../store/slices/contactsSlice";
import ContactsItem from "../../components/contactsItem/ContactsItem";
import AddContact from "../../components/addContact/AddContact";

const Contacts = () => {
    const [editedValue, setEditedValue] = useState({name: '', phone: ''})
    const value = useSelector((state:RootState) => state.contacts)
    const searchValue = useSelector((state:RootState) => state.filteredContacts)
    const dispatch = useDispatch()

    const handleAddContact = (data:AddContactDataType) => {
        dispatch(addContact(data))
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
            <Container maxWidth='lg'>
                <Typography sx={{my: 8}} variant='h3' component='h3'>Contacts</Typography>
                <AddContact handleAddContact={handleAddContact} />
                <Grid container spacing={2}>
                    { 
                        value.length ? 
                            filtered.map((contact:Contact) => {
                                return (
                                    <Grid key={contact.id} gap={2} item xs={6}>
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
                        <Paper elevation={3} sx={{p: 1, my: 8}}>
                            <Typography align="center" sx={{my: 8}} variant="h5" component="h5">Add contact</Typography>
                        </Paper>
                    : null
                }
                
            </Container>
        </>
    )
}
export default Contacts;