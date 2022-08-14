import styled from "styled-components";
import { BaseColor } from "../../config/color";

export const Tr = styled.tr`
    background-color: ${BaseColor.whiteColor};
    border-top: thin solid;
`;


export const Td = styled.td`
    padding: 0.5%;
    text-align: left;
    padding-left: 0px;

    :first-child { border-top-left-radius: 10px }
    :last-child { border-top-right-radius: 10px }
    :first-child { border-bottom-left-radius: 10px }
    :last-child { border-bottom-right-radius: 10px }
`;