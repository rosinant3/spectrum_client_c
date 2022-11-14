import styled from 'styled-components';


export const HeaderBackground = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: var(--spectrumColorDark);
    height: 68px;

`;

export const AddButton = styled.div`


    position: fixed;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    svg {

        color: var(--spectrumColorDark);
        transition: opacity 250ms ease-in-out;
        cursor: pointer;
    }

    svg:hover {
        opacity: 0.5;
    }
`;