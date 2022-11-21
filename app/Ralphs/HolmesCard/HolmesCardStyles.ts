import styled from 'styled-components';





export const HolmesCardContainer = styled.div`

    padding: 1rem;
    min-height: 500px;
    width: 100%;
`;

export const CardTitle = styled.div`
    height: auto;
    padding: 25px;
    background-color: var(--spectrumColorDark);
    color: var(--spectrumColorLight);
`;

export const CardOpen = styled.div`
    height: auto;
    padding: 15px 30px;
    text-align: end;
    background-color: var(--spectrumColorDark);
    
    a {
        color: var(--spectrumColorLight);
        transition: opacity 250ms ease-in-out;
    }

    a:hover {
        opacity: 0.5;
    }
`;





export default {};