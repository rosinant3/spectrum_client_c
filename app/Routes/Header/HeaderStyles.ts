import styled from 'styled-components';


export const HeaderContainer = styled.div`

    max-width: var(--layoutWidthMax);
    margin: auto;
    font: var(--fontWeightBold) 15px/1.6 var(--fontFamily);
    padding: 12px var(--columnPaddingNormal);
    position: relative;
    z-index: 1;
    color: var(--headingColor);
    display: flex;
    justify-content: space-between;

    a {
        color: var(--headingColor);
        text-decoration: none;
    }

`; 