import styled from 'styled-components';

export const BulletinParent = styled.div`

    height: 100%;
    width: 100%;
`;

export const BulletinContainer = styled.div`

    position: relative;
    max-width: var(--layoutWidthMax);
    font: var(--fontWeightBold) 15px/1.6 var(--fontFamily);
    padding: 12px var(--columnPaddingNormal);
    margin: auto;
    height: 100%
    display: grid;

`;

export const ButtonContainer = styled.div`

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;

    > svg {
        cursor: pointer;
        transition: opacity 250ms ease-in-out;
    }

    > svg:hover {
        opacity: 0.5;
    }
`;