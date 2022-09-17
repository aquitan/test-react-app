import styled from '@emotion/styled'
import Button from '@mui/material/Button';

type ButtonCustomTypes = {
    text?: string,
    color: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined,
    variant?: "text" | "contained" | "outlined",
    type: "button" | "submit" | "reset" | undefined,
    startIcon?: JSX.Element,
    onClick?: () => void
}

const ButtonCustom = ({text, startIcon, color, variant = 'text', type, onClick}:ButtonCustomTypes) => {

    const StyledButton = styled(Button)`
        width: fit-content;
        padding: 10px;
        max-width: 200px;
        width: 100%;
        margin: 0 10px
    `


    return (
        <StyledButton startIcon={startIcon} onClick={onClick} type={type} variant={variant} color={color}>{text}</StyledButton>
    )
}
export default ButtonCustom;