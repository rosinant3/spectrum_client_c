import React from 'react';
import styled from '@emotion/styled';
import CommentIcon from '@mui/icons-material/Comment';
import { useOpenComment } from './ImageCommentHooks';
import { iconStyleBlack } from '../../utils';
import CommentForm from './CommentForm/CommentForm';
import { SwiperContext } from '../../utils';

const Comment  = styled.div`
    position: fixed;
    top: 5rem;
    right: 7rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 500;

    > svg {
        transition: opacity 250ms ease-in-out;
    }

    > svg:hover {
        opacity: 0.5;
    }
`;

interface ImageCommentProps {
   
};
  
const ImageComment: React.FC<ImageCommentProps> = () => {

    const { open, toggleSetOpen } = useOpenComment();

    return (
        <Comment> 
            <CommentIcon onClick={toggleSetOpen} style={iconStyleBlack} ></CommentIcon>
            { open && <SwiperContext.Consumer>
                        {state => <CommentForm state={state}/> }
                    </SwiperContext.Consumer>}
        </Comment>
    );
};

/*
    <Text>
    { comment }
    </Text> 
*/


export default ImageComment;