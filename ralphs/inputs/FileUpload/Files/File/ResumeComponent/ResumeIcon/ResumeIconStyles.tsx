import styled from '@emotion/styled';

export const IconContainer = styled.div`

    color: var(--mainColor);
    transition: color 250ms ease-in-out;
    cursor: pointer;
    z-index: 100;

    svg {
        font-size: 22px;
    }

    &:hover {
        color: var(--mainActiveColor);
    }

`;