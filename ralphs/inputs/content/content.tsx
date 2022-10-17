

import React from 'react';
import { ColorContainer } from '../color/colorDateStyles';
import TextField from '@material-ui/core/TextField';
import { useContent } from './contentHooks';

interface ContentProps {
    content: { value: string, error: string; };
} 

const Content: React.FC<ContentProps> = (props) => {
  const { content, contentOnChange, contentError } = useContent(props.content)
  return (<ColorContainer>
        <TextField

            error={contentError.status}
            id="outlined-error-helper-text2"
            helperText={contentError.message}
            value={content}
            size="small"
            fullWidth
            variant="outlined"
            inputProps={{
            //maxLength: 4000
            }}
            multiline={true}
            minRows={7}
            maxRows={9}
            onChange={contentOnChange}  

        />
  </ColorContainer>);
};

export default Content;