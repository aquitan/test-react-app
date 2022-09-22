import { useState } from "react"

export const useModal = () => {
    const [open, setOpen] = useState(false)

    const toggleModal = (val:boolean) => {
        setOpen(val)
    }

    return {open, toggleModal}
}