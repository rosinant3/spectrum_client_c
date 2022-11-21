import React from 'react';
import { TextField, Button } from '@mui/material';
import { 
    NewPostContainer
} from './NewPostStyles';
import {
  NewPostProps
} from './Interfaces';
import {
  useTextFieldControl,
  useFormSubmit
} from './NewPostHooks';

const NewPost:React.FC<NewPostProps> = ({ type }) => {
 
  const { titleOnChange, error, setError  } = useTextFieldControl();
  const { formSubmit, create } = useFormSubmit({ type, setError }); 
  
  return (
    <NewPostContainer onSubmit={formSubmit}>
        <TextField  
        
          onChange={titleOnChange}
          error={error.status}
          id="outlined-basic" 
          label="Enter Title" 
          helperText={error.txt}
          variant="outlined" 
          size="small"
          required
          inputProps={{
            maxLength: 100
          }}
          
        />
        <Button disabled={error.disabled} color="primary" type="submit" variant="contained">{create}</Button>
    </NewPostContainer>
  );
}

export default NewPost;
