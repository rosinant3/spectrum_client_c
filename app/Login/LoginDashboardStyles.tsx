import styled from 'styled-components';

export const StateText = styled.div`
    font-size: 0.8rem;
    cursor: pointer;
    color: lightblue;
    transition: opacity 250ms ease-in-out;
    &:hover {
        opacity: 0.5;
    }
`;


export const StateContainer = styled.div`

    margin-top: 2rem;
`;

export const LoginImage = styled.div`

    @media (max-width: 750px) {
        flex-direction: column;
        display: none;
    }
`;

export const FormContainer = styled.div`

    background-color: white;
    display: flex;
    jusyify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding-top: 5rem;
    min-height: calc(100vh - 68px);
`;

export const LoginDashboardGrid = styled.div`

    display: grid;
    grid-template-columns: auto 500px;
    grid-template-rows: auto;
    height: 100%;

    @media (max-width: 750px) {
        grid-template-columns: auto;
    }
`;

export const LoginDashboardContainer = styled.div`

    background-color: var(--spectrumColorDark);
    position: relative; 
`;

export const HeaderOverlay = styled.div`
    height: 68px;
    position: absolute;
    top: -68px;
    left: 0;
    right: 0;
    z-index: 0;
    background-color: var(--spectrumColorDark);
    border-bottom-style: solid;
    border-width: 1px;
    border-color: white;
`;