import styled from "styled-components";

export const Rectangule = styled("div") <{
    borderColor: string,
    backgroundColor: string
}>`
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border: 1px solid ${props => props.borderColor};
    margin-right: 10px;
    background-color: ${props => props.backgroundColor};
`;