import styled from "styled-components";

export const Rectangule = styled("div") <{
    borderColor: string,
    backgroundColor: string,
    height: number,
    width: number,
}>`
    box-sizing: border-box;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: 1px solid ${props => props.borderColor};
    margin-right: 10px;
    background-color: ${props => props.backgroundColor};
`;