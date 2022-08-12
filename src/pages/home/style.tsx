import styled from "styled-components";
import { BaseColor } from "../../config/color";

export const Content = styled.div`
    background-color: ${BaseColor.fieldColor};
    padding: 3%;
`;

export const TextInput = styled.input`
    background-color: ${BaseColor.whiteColor};
    width: 100%;
    height: 22px;
    border-radius: 5px;
    border: 0px;
    color: black;
    font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
    :focus{
        outline: none;
    }
    ::-webkit-input-placeholder{
        color: ${BaseColor.accentGrayColor};
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
    }
`;

export const View = styled.div`
    display: flex;
   
`;

export const Th = styled.th`
    text-align: left;
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0 10px;
`