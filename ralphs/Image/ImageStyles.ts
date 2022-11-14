import styled from 'styled-components';

export const ImageContainer = styled.div`

  
    height: 350px;
    width: 100%;
    margin: 2rem auto auto;
    border-radius: 5px;
    transition: all 250ms ease-in-out 0s;
    position: relative;
    z-index: 10;
`;

export const ImageDiv = styled.div`

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;

`;

export const Img = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;


