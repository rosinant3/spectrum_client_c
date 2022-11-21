import styled from 'styled-components';



export const MenuContainer = styled.div`

    display: flex;
    flex-direction: row;

    @media (max-width: 750px) {
        display: none;
    }
`;

export const MenuButton = styled.div`

    padding: 10px 20px;
    cursor: default;
    transition: opacity 250ms ease-in-out;
    opacity: 1;

    :hover {
        opacity: 0.5;
    }

`;