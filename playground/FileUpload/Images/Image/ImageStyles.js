import styled from '@emotion/styled';
import { opacityPulsate, enterList } from './StyleKeyframes';

export const ImageContainer = styled.div`

    background-position: center;
    background-size: container;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
    border-radius: 10px;
    position: relative;

`;

export const ImageLoadingAnimation = styled.div`

    animation: ${opacityPulsate} 500ms ease infinite alternate;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;

`;