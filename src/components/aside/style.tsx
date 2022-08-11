import styled from "styled-components";

export const Content = styled("div") <{ color: string }>`
    display: grid;
    grid-template-rows: 1.2fr 1px 5fr 3fr;
    grid-template-columns: auto;
    grid-gap: 10px;
    height: 100%;
    background-color: ${props => props.color};
    padding-left: 15%;
    padding-right: 15%;
`;

export const View = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
`;

export const Avatar = styled.img`
    width: 31px;
    height: 31px;
    border-radius: 15.5px;
    margin-left: 5px;
`