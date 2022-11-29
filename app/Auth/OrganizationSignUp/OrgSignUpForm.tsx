import React from 'react';
import { OrgSignUpFormProps } from './Interfaces';
import {
    FormContainer,
    FormSection
} from './OrgSignUpFormStyles'; 
import SpectrumInput from '../../Ralphs/SpectrumInput/SpectrumInput';
import RepeatPasswordInput from '../../Ralphs/RepeatPasswordInput/RepeatPasswordInput';
import { ErrorText } from '../../Ralphs/Styles/General';
import { OrgSignUpStoreContext } from './Store/Store';
import { Button } from '@mui/material';
import { useFormSubmit, useSaveForm } from './OrgSignUpFormHooks';
import { formValidators, formInfo } from './Utils';

const OrgSignUpForm:React.FC<OrgSignUpFormProps> = () => {
 
    const { state, form } = React.useContext(OrgSignUpStoreContext);
    const { formRef } = useSaveForm({ form });
    const { signUp, submitFunction } = useFormSubmit({ form, formRef });
 
  return (
    <FormContainer ref={formRef} onSubmit={submitFunction}>
        <FormSection>
            <SpectrumInput 
            
                input={state.orgName}
                maxLength={formInfo.orgName.max}
                label={formInfo.orgName.label}
                required={false}
                readonly={false}
                type='text'
                multiline={false}
                utils={{
                    validators: formValidators.orgName
                }}

            />
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
            
                input={state.email}
                maxLength={formInfo.email.max}
                label={formInfo.email.label}
                required={false}
                readonly={false}
                type='text'
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
        <FormSection>
            <ErrorText>{signUp === 'Sign Up' && state.general.error}</ErrorText>
        </FormSection>
    </FormContainer>
  );
}

export default OrgSignUpForm;
