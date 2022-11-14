import styled from 'styled-components';

export const GridContainer = styled.div`

    position: absolute;
`;

export const BulletinGrid = styled.div`

    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: auto;
    grid-gap: 50px;

`;

export const BulletinSection = styled.div`

    width: 100%;
    height: 500px; 
    display: flex;
    margin-top: 50px;
`;

export const HomePageHeading = styled.div`

    margin-top: var(--headerMarginTop);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    letter-spacing: var(--titleLetterSpacing,inherit);
    width: 100%;
`;

export const HeadingText = styled.div`

    display: flex;
    justify-content: center;
    alig-items: center;
    font: var(--titleFont);
    text-align: center;
    margin-bottom: 1rem;
    color: var(--headingColor);
`;

export const DescriptionText = styled.div`

    color: var(--descriptionColor);
`;

export const ImageContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px; 
    width: 100%;
    position: absolute;

`;

