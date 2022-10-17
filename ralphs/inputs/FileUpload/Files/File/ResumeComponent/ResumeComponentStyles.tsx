import styled from '@emotion/styled';

export const IconContainer = styled.div`

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #FFCCCB;
    transition: color 250ms ease-in-out;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    &:hover {
        color: red;
    }
`;

export const ProgressBox = styled.div`

    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    color: white;
    font-size: 0.6rem;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    padding: 0.20rem;
`;