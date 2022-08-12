import styled from "styled-components";
import { BaseColor } from "../../config/color";

export const Content = styled("div")`
    display: grid;
    grid-template-rows: 1.2fr 1px 5fr 4fr;
    grid-template-columns: auto;
    grid-gap: 10px;
    height: 100%;
    background-color: ${BaseColor.fieldColor};
    
`;

export const View = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
`;
export const ViewDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15%;
    padding-right: 15%;
`;

export const ViewPie = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    width: 31px;
    height: 31px;
    border-radius: 15.5px;
    margin-left: 5px;
`
export const UpgradeContent = styled.div`
    padding-left: 15%;
    padding-right: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GradiantRectangule = styled.div`
    background: linear-gradient(270.15deg, #689FF8 0.15%, #FF6860 54.7%, #FF9F00 99.9%);
    height: 40%;
    width: 70%;
    border-radius: 11px;
`;