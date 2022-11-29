import styled from 'styled-components';


export const LoginHeader = styled.h1`

    cursor: default;
    margin-top: 0rem;
    margin-bottom: 2rem;
    color: var(--spectrumColorDark);

`;

export const TypeSpan = styled.span`

    color: var(--descriptionColor);
    cursor: pointer;
    transition: opacity 250ms ease-in-out;

    &:hover {
        opacity: 0.5;
    }
`;



export default {};