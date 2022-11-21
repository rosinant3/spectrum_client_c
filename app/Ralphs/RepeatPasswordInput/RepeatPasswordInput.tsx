import React from 'react';
import { SpectrumRepeatPasswordInputProps } from './Interfaces';
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

const RepeatPasswordInput:React.FC<SpectrumRepeatPasswordInputProps> = ({ input, utils }) => {
 
    const { validators, info } = utils;
    const { fieldStatePassword, setFieldStatePassword, inputRefPassword } = useFieldStatePassword({ input: input.password });
    const { fieldStateRepeat, setFieldStateRepeat, inputRefRepeat } = useFieldStateRepeat({ input: input.repeatPassword });
    const { passwordOnChange } = usePassword({ fieldStatePassword, setFieldStatePassword, validators: validators.password });
    const { repeatOnChange } = useRepeat({ fieldStateRepeat, setFieldStateRepeat, inputRefPassword });

  return ( 
    <RepeatPasswordInputContainer>
        <TextField 
        
            id='password'
            label={info.password.label}
            variant="outlined" 
            error={fieldStatePassword.errorStatus}
            helperText={fieldStatePassword.errorText}
            inputProps={{ 
                maxLength: info.password.max,
            }}  
            required={true}
            type='password'
            onChange={passwordOnChange}
            inputRef={inputRefPassword}
            autoComplete="new-password"
            size="small"
            sx={{ width: '223px' }}

        />
        <TextField 
        
            id='repeat-password'
            label={info.repeatPassword.label}
            variant="outlined" 
            error={fieldStateRepeat.errorStatus}
            helperText={fieldStateRepeat.errorText}
            inputProps={{ 
                maxLength: info.password.max
            }}
            required={true}
            type='password'
            onChange={repeatOnChange}
            inputRef={inputRefRepeat}
            autoComplete="new-password"
            size="small"
            sx={{ width: '223px' }}

        />
    </RepeatPasswordInputContainer>
  );
}

export default RepeatPasswordInput;
