import React from 'react';
import { SpectrumInputProps } from './Interfaces';
import {
    SpectrumInputContainer
} from './SpectrumInputStyles';
import TextField from '@mui/material/TextField';
import {
  useTextField,
  useFieldState
} from '../Hooks/useTextField/useTextField';

const SpectrumInput:React.FC<SpectrumInputProps> = ({ input, label, maxLength, required, readonly, type, multiline, utils }) => {

  const { fieldState, setFieldState, inputRef } = useFieldState({ input, label });
  const { textFieldOnChange } = useTextField({ validators: utils.validators, label, fieldState, setFieldState });

  return ( 
    <SpectrumInputContainer>
        <TextField 
        
            id={label}
            label={label} 
            variant="outlined" 
            error={fieldState.errorStatus}
            helperText={fieldState.errorText}
            multiline={multiline}
            inputProps={{ 
                maxLength: maxLength,
                readOnly: readonly
            }}
            maxRows={6}
            required={required}
            type={type}
            onChange={textFieldOnChange}
            ref={inputRef}
            autoComplete="new-password"
            size="small"

        />
    </SpectrumInputContainer>
  );
}

export default SpectrumInput;
