import React from "react";

type FormTypes = {
    children: React.ReactNode,
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}

const Form = ({children, onSubmit}:FormTypes) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;