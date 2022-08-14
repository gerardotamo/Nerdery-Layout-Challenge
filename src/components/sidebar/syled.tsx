import styled from "styled-components";
import { BaseColor } from "../../config/color";

export const Content = styled.div`
    background-color: ${BaseColor.primaryColor};
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`;

export const ColorPalette = styled.div`
    width: 74px;
    height: 21px;
    margin-left: 32px;
    margin-top: 36px;

    background: linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%);
    border-radius: 5px;    
`;

export const DialogContent = styled.div`
    height: 111px;
    width: 67%;
    background: #464C61;
    //background: transparent;
    border-radius: 9px;
    margin-bottom: 20px;
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;

    ::after{
        content: '';
        border: 10px solid transparent;
        position: absolute;
        border-top-color: #464C61;
        top: 110px;
        left: 20px;
    }
`
