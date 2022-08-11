import styled from "styled-components";

const Text = styled('p')<{color: string, size: number   }>`
    color: ${props => props.color};

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.size} + "px";

`;


export {Text};