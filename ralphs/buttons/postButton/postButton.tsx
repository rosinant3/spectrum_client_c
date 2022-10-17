import React from 'react';
import { useButtonText } from './postButtonHooks';
import { ButtonContainerRight, PostButtonComponent } from './postButtonStyles';

interface IncidentFormProps {
    waiting: boolean;
    id: number;
};
  
const PostButton: React.FC<IncidentFormProps> = (props) => {
  const { buttonText } = useButtonText({ id: props.id, waiting: props.waiting });
  return (<ButtonContainerRight>
        <PostButtonComponent type="submit" >{buttonText}</PostButtonComponent> 
    </ButtonContainerRight>);
};
  

export default PostButton;