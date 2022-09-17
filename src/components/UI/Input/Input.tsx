import TextField from "@mui/material/TextField";
import React from "react";

type InputTypes = {
    type: string,
    label: string,
    value: string,
    name: string,
    required?: boolean,
    error?: boolean,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({required, error, type, label, value, name, onChange }:InputTypes) => {
    return (
        <TextField error={error && !value} required={required} autoComplete="off" className="w-full" name={name} value={value} type={type} id={label} label={label} onChange={onChange} variant="standard" />
    )
}
export default Input;