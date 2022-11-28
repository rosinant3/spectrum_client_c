import React from 'react';
import { UserSignUpFormProps } from './Interfaces';
import {
    FormContainer,
    FormSection
} from './UserSignUpFormStyles'; 
import SpectrumInput from '../../Ralphs/SpectrumInput/SpectrumInput';
import RepeatPasswordInput from '../../Ralphs/RepeatPasswordInput/RepeatPasswordInput';
import { SignUpStoreContext } from './Store/Store';
import { Button } from '@mui/material';
import { useFormSubmit, useSaveForm } from './UserSignUpFormHooks';
import { formValidators, formInfo } from './Utils';

const UserSignUpForm:React.FC<UserSignUpFormProps> = () => {
 
    const { state, form } = React.useContext(SignUpStoreContext);
    const { formRef } = useSaveForm({ form });
    const { signUp, submitFunction } = useFormSubmit({ form, formRef });
 
  return (
    <FormContainer ref={formRef} onSubmit={submitFunction}>
        <FormSection>
            <SpectrumInput 
            
                input={state.firstName}
                maxLength={formInfo.firstName.max}
                label={formInfo.firstName.label}
                required={false}
                readonly={false}
                type='string'
                multiline={false}
                utils={{
                    validators: formValidators.firstName
                }}

            />
            <SpectrumInput 
            
                input={state.lastName}
                maxLength={formInfo.lastName.max}
                label={formInfo.lastName.label}
                required={false}
                readonly={false}
                type='string'
                multiline={false}
                utils={{
                    validators: formValidators.lastName
                }}
            
            />
            <SpectrumInput 
            
                input={state.username}
                maxLength={formInfo.username.max}
                label={formInfo.username.label}
                required={false}
                readonly={false}
                type='string'
                multiline={false}
                utils={{
                    validators: formValidators.username
                }}
        
            />
            <SpectrumInput 
            
                input={state.email}
                maxLength={formInfo.email.max}
                label={formInfo.email.label}
                required={false}
                readonly={false}
                type='string'
                multiline={false}
                utils={{
                    validators: formValidators.email
                }}
    
            />
        </FormSection>
        <RepeatPasswordInput 
        
            input={{
                password: state.password,
                repeatPassword: state.repeatPassword
            }}
            utils={{
                validators: {
                    password: formValidators.password
                },
                info: {
                    password: formInfo.password,
                    repeatPassword: formInfo.repeatPassword
                }
            }}
            
        />
        <FormSection>
            <Button color="primary" type="submit" variant="contained">{signUp}</Button>
        </FormSection>
    </FormContainer>
  );
}

export default UserSignUpForm;
