import styled from "styled-components";

export const List = styled.li`
    margin-top: 33px;
    list-style: none;
`

export const Item = styled.ul`
    cursor: pointer;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin: 0px;
`;

export const SelectRectangule = styled('div')<{ color: string }>`
    background-color: ${props => props.color};
    width: 7px;
    height: 44px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    margin-right: 25px;
`;

