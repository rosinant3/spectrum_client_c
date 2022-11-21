import { IFormValidators, IFormData, IFormInfo } from './Interfaces';
import emailValidator from "../../Ralphs/Validators/EmailValidator/EmailValidator";
import alphaNumericValidator from "../../Ralphs/Validators/AlphaNumericalValidator/AlphaNumericalValidator";
import passwordValidator from "../../Ralphs/Validators/PasswordValidator/PasswordValidator";
import minLengthValidator from "../../Ralphs/Validators/MinLengthValidator/MinLengthValidator";
import maxLengthValidator from "../../Ralphs/Validators/MaxLengthValidator/MaxLengthValidator";

export const formInfo:IFormInfo = {
    firstName: { min: 1, max: 100, label: 'First Name' },
    lastName: { min: 1, max: 100, label: 'Last Name'},
    username: { min: 1, max: 100, label: 'Username'},
    email: { min: 1, max: 320, label: 'E-Mail' },
    password: { min: 8, max: 127, label: 'Password' },
    repeatPassword: { min: 8, max: 127, label: 'Repeat Password' }
};

export const formValidators:IFormValidators = {
    firstName: [ 
       /* isNotEmptyValidator, */
        minLengthValidator(formInfo.firstName.min), 
        maxLengthValidator(formInfo.firstName.max)  
    ],
    lastName: [ 
       /* isNotEmptyValidator, */
        minLengthValidator(formInfo.lastName.min), 
        maxLengthValidator(formInfo.lastName.max)  
    ],
    username: [ 
        /*isNotEmptyValidator, */
        
        minLengthValidator(formInfo.username.min), 
        maxLengthValidator(formInfo.username.max),
        alphaNumericValidator
    ],
    email: [ 
      /*  isNotEmptyValidator, */
        minLengthValidator(formInfo.email.min), 
        maxLengthValidator(formInfo.email.max),
        emailValidator 
    ],
    password: [
        minLengthValidator(formInfo.password.min), 
        maxLengthValidator(formInfo.password.max),
        passwordValidator
    ],
    repeatPassword: []
};

export const formKeys: [
    'firstName', 
    'lastName', 
    'username',
    'email',
    'password',
    'repeatPassword'
] = [ 
    'firstName', 
    'lastName',  
    'username',
    'email',
    'password',
    'repeatPassword'
];

export const generateFormData = (form:any) => {
    return {
        firstName: form[0].value,
        lastName: form[2].value,
        username: form[4].value,
        email: form[6].value,
        password: form[8].value,
        repeatPassword: form[10].value
    };
}

export const validateFormData = async (formData:IFormData) => {

    const errors = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    };
    let state = false;

    for await (let key of formKeys) {
        for await (let validator of formValidators[key]) {
            const { status, msg } = validator(formData[key]);
            if (!status) {
                errors[key] = `${formInfo[key].label} ${msg}`;
                state = true;
                break;
            }
        }
    }

    return { errors, state };
};