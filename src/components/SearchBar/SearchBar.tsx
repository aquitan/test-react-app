import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchContact } from '../../store/slices/contactsSlice';
import { TextField } from '@mui/material';

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const onSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        dispatch(searchContact(e.target.value))
    }


    return(
        <TextField type='search' placeholder='Search' variant='standard' value={search} onChange={onSearch} />
    )
}

export default SearchBar;