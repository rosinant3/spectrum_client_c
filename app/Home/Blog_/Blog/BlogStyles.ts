import styled from 'styled-components';

export const BlogContainer = styled.div`

    max-width: var(--layoutWidthMax);
    margin: auto;
    font: var(--fontWeightBold) 15px/1.6 var(--fontFamily);
    padding: 12px var(--columnPaddingNormal);
    position: relative;
    color: var(--descriptionColor);
    margin-top: 200px;
    margin-bottom: 200px;
`;

export const BlogGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;

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