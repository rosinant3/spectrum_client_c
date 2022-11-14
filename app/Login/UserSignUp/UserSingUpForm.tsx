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
import { formValidators } from './Utils';

const UserSignUpForm:React.FC<UserSignUpFormProps> = () => {

    const { state, dispatch } = useSingUpStore();
    const { signUp, submitFunction } = useFormSubmit({ dispatch, formValidators });

  return (
    <FormContainer onSubmit={submitFunction}>
        <Title>Register</Title>
        <FormSection>
            <SpectrumInput 
            
                input={state.firstName}
                maxLength={100}
                label='First Name'
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
                maxLength={100}
                label='Last Name'
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
                maxLength={100}
                label='Username'
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
                maxLength={100}
                label='E-Mail'
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
            
            />
        </FormSection>
        <Button color="primary" type="submit" variant="contained">{signUp}</Button>
    </FormContainer>
  );
}

export default UserSignUpForm;
