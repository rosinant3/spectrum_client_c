import styled from 'styled-components';

export const SlideButtonContainer = styled.div`

    position: absolute;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;

`;

export const SlideButton = styled.div`

    display: inline-block;
    position: relative;
    height: 100px;
    width: 100px;
    background-color: white;
    color: var(--mainActiveColor);
    transition: all 250ms ease-in-out;
    cursor: pointer;
    font-size: 0.8rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        color: white !important;
        background-color: var(--mainActiveColor) !important;
    }
`;

export const ImagesContainer = styled.div`

    margin-top: 1rem;
    font-size: 0.8rem;
    position: relative;
    overflow: hidden;

`;

export const ImagesItems = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 300px;
    position: relative;
    margin-bottom: 2rem;

`;

export const ImagesItem = styled.div`

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

        background-color: var(--mainActiveColor);

    }
`;

export const ImageContainer = styled.div`

    padding: 0rem;
    border-right: solid 1px #ccc;
    box-sizing: border-box;
    border-style: none;
    background: white;
    font-size: 14px;
    position: absolute;
    flex-basis: 0;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 300px;
    width: 100%;
    transition: all 250ms ease-in-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 2rem;

`;

export const ImagePreview = styled.div`

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    position: absolute;
    border-width: 1px;
    transition: all 250ms ease-in-out;
    image-rendering: -webkit-optimize-contrast;
    margin: auto;
    z-index: 90;

`;

export const RotationContainer = styled.div`

    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;

`;

export const Close = styled.div`

    font-size: 1.4rem;
    position: absolute;
    top: 0rem;
    right: 2rem;
    color: white;
    cursor: pointer;
    transition: all 500ms ease-in-out;
    z-index: 100;
    background-color: red;
    display: flex;
    padding: 0.15rem;
    border-radius: 5px;
    transform: scale(0.8);

    &:hover {
        opacity: 0.8;
    }

`;

export const FullScreenImage = styled.div`

    position: fixed;
    top: 20%;
    left: 20%;
    right: 20%;
    bottom: 20%;
    z-index: 1000;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 250ms ease-in-out;

`;

export const FlexContainer = styled.div`

    position: relative; 
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Position = styled.div`

    background-color: var(--mainColor);
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    position: relative;
    cursor: pointer;
    transition: all 250ms ease-in-out;

`;

export const CommentContainer = styled.div`

    position: absolute;
    top: 0rem;
    left: 1rem;
    z-index: 10000;
    transition: all 250ms ease-in-out;

`;

export const ImmageCommentContainer = styled.div`

    background-color: rgba(0,0,0,0);
    border-radius: 5px;

`;

export const ErrorText = styled.div`

    color: red;
    text-align: center;
    padding: 0.5rem;
    font-weight: bold;
    cursor: default;
    font-size: 0.8rem;
`;