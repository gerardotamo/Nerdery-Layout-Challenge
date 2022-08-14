import styled from "styled-components";

export const Divider = styled.div<{color: string}>`
    border: 1px solid ${props => props.color};
`;