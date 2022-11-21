import React from 'react';
import { UserSignUpFormProps } from './Interfaces';
import {
    FormContainer,
    FormSection,
    Title
} from './UserSingUpFormStyles'; 
import SpectrumInput from '../../Ralphs/SpectrumInput/SpectrumInput';
import RepeatPasswordInput from '../../Ralphs/RepeatPasswordInput/RepeatPasswordInput';
import useSingUpStore from './Store/Store';
import { Button } from '@mui/material';
import { useFormSubmit } from './UserSingUpFormHooks';
import { formValidators, formInfo } from './Utils';

const UserSignUpForm:React.FC<UserSignUpFormProps> = () => {

    const { state, dispatch } = useSingUpStore();
    const { signUp, submitFunction } = useFormSubmit({ dispatch, formValidators });
 
  return (
    <FormContainer onSubmit={submitFunction}>
        <FormSection>
            <SpectrumInput 
            
                input={state.firstName}
                maxLength={formInfo.firstName.max}
                label={formInfo.firstName.label}
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
                readonly={false}
                type='string'
                multiline={false}
                utils={{
                    validators: formValidators.email
                }}
    
            />
        </FormSection>
        <FormSection>
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
        </FormSection>
        <Button color="primary" type="submit" variant="contained">{signUp}</Button>
    </FormContainer>
  );
}

export default UserSignUpForm;
