import React from 'react';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const CommentFormContainer  = styled.form`
    width: 300px;
        
    > div {
        margin-bottom: 1rem;
    }
`;

interface CommentFormProps {
   state: any;
};
  
const CommentForm: React.FC<CommentFormProps> = ({ state }) => {

    const updateComment = state.updateComment;

    return (
            <CommentFormContainer onSubmit={updateComment}>
                <TextField

                    style={{ width: '100%' }}
                    placeholder="Comment..."
                    multiline
                    maxRows={10}
                    id="comment"

                />
                <Button type="submit" variant="contained">Update</Button>
            </CommentFormContainer>
    );
};

/*
    <Text>
    { comment }
    </Text> 
*/


export default CommentForm;