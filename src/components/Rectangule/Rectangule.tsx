import styled from "styled-components";

export const Rectangule = styled("div") <{
    borderColor: string,
    backgroundColor: string,
    height: string,
    width: string,
    borderRadius: number  
}>`
    box-sizing: border-box;
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid ${props => props.borderColor};
    margin-right: 10px;
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius}px;
`;