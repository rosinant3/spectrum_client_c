import styled from '@emotion/styled';

export const IconContainer = styled.div`

    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    color: #FFCCCB;
    transition: color 250ms ease-in-out;
    cursor: pointer; 
    z-index: 600;
    
    svg {
        font-size: 18px;
    }
    
    &:hover {
        color: red;
    }

`;