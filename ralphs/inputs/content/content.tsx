import React, { useCallback, useState, useEffect } from 'react';
import { ContentContainer } from '../inputComponents';
import TextField from '@material-ui/core/TextField';
import { useContent } from './contentHooks';

interface ContentProps {
    content: { value: string, error: string; };
    ref:any;
} 

const Content: React.FC<ContentProps> = React.forwardRef((props, ref:any) => {
  const { content, contentOnChange, contentError } = useContent(props.content)
  return (<ContentContainer>
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
            ref={ref}

        />
  </ContentContainer>);
});

export default Content;
