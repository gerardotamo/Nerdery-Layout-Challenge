import styled from "styled-components";

export const Button = styled("button")<{heigth: string, width: string, color: string}>`
    background-color: ${props => props.color};
    height: ${props => props.heigth};
    width: ${props => props.width};
    border: 0px;
    border-radius: 7px;
    border-color: transparent;
`; 