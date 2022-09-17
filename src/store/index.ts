import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contactsSlice";


export const store = configureStore({
    reducer: contactsSlice,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch