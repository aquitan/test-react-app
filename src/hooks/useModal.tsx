import { useState } from "react"

export const useModal = () => {
    const [open, setOpen] = useState(false)

    const toggleModal = (val:boolean) => {
        console.log('modal val', val)
        setOpen(val)
    }

    return {open, toggleModal}
}