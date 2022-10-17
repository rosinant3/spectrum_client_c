import styled from 'styled-components';

export const ButtonContainerRight = styled.div`
	display: flex;
	justify-content: right;
`;


export const PostButtonComponent = styled.button`
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--mainColor);
    border-style: solid;
    border-width: 2px;
    border-color: white;
    color: white;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    z-index: 100;
    margin-bottom: 1rem;
    &:hover {
        background-color: var(--mainActiveColor);
    }
    `;
