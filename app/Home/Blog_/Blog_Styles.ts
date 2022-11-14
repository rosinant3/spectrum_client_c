import styled from 'styled-components';

export const VisibilityDetector = styled.div`

    position: absolute;
    height: 400px;
    width: 100%;
    z-index: -1;
    pointer-events: none;
`;

export const Blog_Container = styled.div`

    position: relative;

    > .ldr {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;