import { ChangeEvent } from "react"

export interface ContactsInterface {
    contacts: Contact[],
    filteredContacts: string
}

export type NewContact = {
    name: string,
    phone: string
}

export type Contact = {
    id: number,
    name: string,
    phone: string,
    isEdit: boolean
}

export type Counter = {
    value: number
}
export type EditedValue = {
    name: string,
    phone: string
    id: number
}
export type Current = {
    id: number,
    name: string,
    phone: string,
    isEdit: boolean
}

export type ContactItem = {
    id: number,
    isEdit?: boolean,
    name: string,
    phone: string,
    editedValue: {
        name: string,
        phone: string
    },
    handleRemoveClick: (id: number) => void,
    handleEditClick: (id: number) => void,
    onEditChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onHandleSaveEdit: (id:number) => void,
    onCancelEdit: (id:number) => void,
}

export type FetchingUser = {
    email: string,
    password: string,
    id: string
}

export type AuthContextData = {
    user: null | string,
    login: (data:LoginType) => Promise<void> | null,
    logout: () => void
}

export type LoginType = {
    email: string,
    password: string
}

export type AddContactDataType = {
    name: string,
    phone: string
}
