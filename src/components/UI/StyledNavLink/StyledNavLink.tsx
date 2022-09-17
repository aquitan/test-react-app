import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

type StyledNavLinkTypes = {
    to: string,
    text: string
}

const StyledNavLink = ({to, text}:StyledNavLinkTypes) => {

    const StyledLink = styled(NavLink)`
        &.active {
            color: #cecece;
            position: relative;
            &:after {
                content: '';
                height: 2px;
                width: 100%;
                background-color: #cecece;
                position: absolute;
                left: 0;
                bottom: -10px;
            }
        }
        &:hover {
            color: lightblue;
            transition: all .2s linear;
        }
        color: #fff;
        padding: 0 10px;
        transition: all .2s linear;
    `

    return (
        <StyledLink to={to}>{text}</StyledLink>
    )
}
export default StyledNavLink;