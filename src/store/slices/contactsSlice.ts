import type { Contact, EditedValue, NewContact } from '../../types/types';
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ContactsInterface } from "../../types/types";
import { createSlice, Draft } from "@reduxjs/toolkit";

const initialState:ContactsInterface = {
    contacts: [],
    filteredContacts: ''
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<NewContact>) => {
            const newTask = {
                id: new Date().getTime(),
                name: action.payload.name,
                phone: action.payload.phone,
                isEdit: false
            }
            state.contacts.push(newTask)
        },
        removeContact: (state, action: PayloadAction<number>) => {
            state.contacts = state.contacts.filter((item:Contact) => item.id !== action.payload)
        },
        editContact: (state, action: PayloadAction<number>) => {            
            const arr = state.contacts;
            arr.map(el => el.isEdit = false)
            let current: Draft<Contact | undefined> = arr.find((el:Contact) => el.id === action.payload)
            if (current) {
                current.isEdit = !current.isEdit
            }
            state.contacts = arr            
        },
        cancelEdit: (state, action:PayloadAction<number>) => {
            const arr = state.contacts;
            let current: Draft<Contact | undefined> = arr.find((el:Contact) => el.id === action.payload)
            if (current) {
                current.isEdit = false
            }
            state.contacts = arr       
        },
        saveEdited: (state, action: PayloadAction<EditedValue, string>) => {
            const arr = state.contacts;
            let current = arr.find((el:Contact) => el.id === action.payload.id)
            if (current) {
                current.name = action.payload.name ? action.payload.name : current.name
                current.phone = action.payload.phone ? action.payload.phone : current.phone
                current.isEdit = !current.isEdit
            }
            state.contacts = arr           
        },
        searchContact: (state, action:PayloadAction<string>) => {
            state.filteredContacts = action.payload
        }
    }
})

export const { addContact, removeContact, editContact, saveEdited, searchContact, cancelEdit } = contactsSlice.actions

export default contactsSlice.reducer