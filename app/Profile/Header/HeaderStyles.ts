import styled from 'styled-components';


export const HeaderContainer = styled.div`


    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    font: var(--fontWeightBold) 15px/1.6 var(--fontFamily);
    padding: 12px var(--columnPaddingNormal);
    background-color: var(--spectrumColorDark);
    width: 152px;
    text-align: center;

    a {
        color: var(--headingColor);
        text-decoration: none;
    }
`;