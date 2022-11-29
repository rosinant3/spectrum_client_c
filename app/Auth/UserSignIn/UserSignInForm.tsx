import React from 'react';
import { UserSignInFormProps } from './Interfaces';
import {
    FormContainer,
    FormSection
} from './UserSignInFormStyles'; 
import SpectrumInput from '../../Ralphs/SpectrumInput/SpectrumInput';
import { ErrorText } from '../../Ralphs/Styles/General';
import { UserSignInStoreContext } from './Store/Store';
import { Button } from '@mui/material';
import { useFormSubmit, useSaveForm } from './UserSignInFormHooks';
import { formValidators, formInfo } from './Utils';

const UserSignInForm:React.FC<UserSignInFormProps> = () => {
 
    const { state, form } = React.useContext(UserSignInStoreContext);
    const { formRef } = useSaveForm({ form });
    const { login, submitFunction } = useFormSubmit({ form, formRef });
 
  return (
    <FormContainer ref={formRef} onSubmit={submitFunction}>
        <FormSection>
            <SpectrumInput 
            
                input={state.username}
                maxLength={formInfo.username.max}
                label={formInfo.username.label}
                required={false}
                readonly={false}
                type='text'
                multiline={false}
                utils={{
                    validators: formValidators.username
                }}
        
            />
            <SpectrumInput 
            
                input={state.password}
                maxLength={formInfo.password.max}
                label={formInfo.password.label}
                required={false}
                readonly={false}
                type='text'
                multiline={false}
                utils={{
                    validators: formValidators.password
                }}
    
            />
        </FormSection>
        <FormSection>
            <Button color="primary" type="submit" variant="contained">{login}</Button>
        </FormSection>
        <FormSection>
            <ErrorText>{login === 'Login' && state.general.error}</ErrorText>
        </FormSection>
    </FormContainer>
  );
}

export default UserSignInForm;
