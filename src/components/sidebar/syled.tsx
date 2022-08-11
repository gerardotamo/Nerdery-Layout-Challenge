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
