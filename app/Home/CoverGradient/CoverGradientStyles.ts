import styled from 'styled-components';



export const Gradient = styled.div`

    --gradientAngle: var(--angleStrong);
    background-color: var(--spectrumColorDark);
    height: 800px;
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 500px;
    right: 0;
    z-index: -1;

    transform-origin: var(--transformOriginX) 100%;
    transform: skewY(var(--gradientAngle)); 

`;