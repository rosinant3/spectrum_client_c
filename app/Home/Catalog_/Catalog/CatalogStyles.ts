import styled from 'styled-components';

export const CatalogContainer = styled.div`

    max-width: var(--layoutWidthMax);
    margin: auto;
    font: var(--fontWeightBold) 15px/1.6 var(--fontFamily);
    padding: 12px var(--columnPaddingNormal);
    position: relative;
    color: var(--descriptionColor);
    margin-top: 200px;
    margin-bottom: 200px;
`;

export const CatalogGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: auto;
    grid-gap: 20px;

    @media(max-width: 1250px) {
        grid-template-columns: repeat(3, 50%);
    }

    @media(max-width: 760px) {
        grid-template-columns: auto;
    }
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