import styled from 'styled-components';

export const FilesContainer = styled.div`

    margin-top: 1rem;
    font-size: 0.8rem;
`;

export const FilesItems = styled.div``;

export const FilesItem = styled.div`

    display: inline-block;
    word-break: break-all;
    align-items: center;
    padding: 1rem;

    > div {
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
    
    > span {
        cursor: default;
    }
`;

export const FilesItemContentOrder = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > span {
        font-size: 0.7rem;
    }

`;

export const FileIconOpacity = styled.div`

    transition: all 500ms ease-in-out;
    margin-bottom: 0.5rem;

    &:hover {

        opacity: 0.5;

    }
`;

export const InputContainer = styled.div`

    padding: 0.5rem;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    background-color: var(--mainColor);
    color: white;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    margin-bottom: 0.5rem;

    &:hover {

        background-color: var(--mainActiveColor) !important;

    }
`;

export const ErrorText = styled.div`

    color: red;
    text-align: center;
    padding: 0.5rem;
    font-weight: bold;
    cursor: default;
    font-size: 0.8rem;
`;