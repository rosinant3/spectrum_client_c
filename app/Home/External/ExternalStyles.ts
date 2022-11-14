import styled from 'styled-components';

export const ExternalContainer = styled.div`

    max-width: var(--layoutWidthMax);
    margin: auto;
    font: var(--fontWeightBold) 15px/1.6 var(--fontFamily);
    padding: 12px var(--columnPaddingNormal);
    position: relative;
    color: var(--descriptionColor);
    margin-top: 100px;
    margin-bottom: 100px;

`;

export const ExternalGrid = styled.div`

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
`;

export const HeadingText = styled.div`

    display: flex;
    justify-content: center;
    alig-items: center;
    font: var(--titleFont); 
    text-align: center;
    margin-bottom: 50px;
    color: var(--headingColor);
`;