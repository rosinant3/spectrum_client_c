import React from 'react';
import { SpectrumInputProps } from './Interfaces';
import {
    RepeatPasswordInputContainer
} from './RepeatPasswordInputStyles';
import TextField from '@mui/material/TextField';
import {
    useFieldStatePassword,
    useFieldStateRepeat,
    usePassword,
    useRepeat
} from './RepeatPasswordInputHooks';

const RepeatPasswordInput:React.FC<SpectrumInputProps> = ({ input }) => {

    const { fieldStatePassword, setFieldStatePassword, inputRefPassword } = useFieldStatePassword({ input: input.password });
    const { fieldStateRepeat, setFieldStateRepeat, inputRefRepeat } = useFieldStateRepeat({ input: input.repeatPassword });
    const { passwordOnChange } = usePassword({ inputRefPassword, fieldStatePassword, setFieldStatePassword });
    const { repeatOnChange } = useRepeat({ inputRefPassword, fieldStateRepeat, setFieldStateRepeat });

  return ( 
    <RepeatPasswordInputContainer>
        <TextField 
        
            id='password'
            label='Password'
            variant="outlined" 
            error={fieldStatePassword.errorStatus}
            helperText={fieldStatePassword.errorText}
            inputProps={{ 
                maxLength: 127,
            }}  
            required={true}
            type='password'
            onChange={passwordOnChange}
            ref={inputRefPassword}
            autoComplete="new-password"
            size="small"

        />
        <TextField 
        
            id='repeat-password'
            label='Repeat Password'
            variant="outlined" 
            error={fieldStateRepeat.errorStatus}
            helperText={fieldStateRepeat.errorText}
            inputProps={{ 
                maxLength: 127
            }}
            required={true}
            type='password'
            onChange={repeatOnChange}
            ref={inputRefRepeat}
            autoComplete="new-password"
            size="small"

        />
    </RepeatPasswordInputContainer>
  );
}

export default RepeatPasswordInput;
