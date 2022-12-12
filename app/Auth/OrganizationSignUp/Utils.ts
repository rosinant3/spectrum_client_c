import { IFormValidators, IFormData, IFormInfo } from './Interfaces';
import emailValidator from "../../Ralphs/Validators/EmailValidator/EmailValidator";
import alphaNumericValidator from "../../Ralphs/Validators/AlphaNumericalValidator/AlphaNumericalValidator";
import passwordValidator from "../../Ralphs/Validators/PasswordValidator/PasswordValidator";
import minLengthValidator from "../../Ralphs/Validators/MinLengthValidator/MinLengthValidator";
import maxLengthValidator from "../../Ralphs/Validators/MaxLengthValidator/MaxLengthValidator";

export const formInfo:IFormInfo = { 
    orgName: { min: 1, max: 100, label: 'Organization Name' },
    username: { min: 3, max: 100, label: 'Username' },
    email: { min: 1, max: 320, label: 'E-Mail' },
    password: { min: 8, max: 127, label: 'Password' },
    repeatPassword: { min: 8, max: 127, label: 'Repeat Password' },
    general: { min: 0, max: 255, label: 'General' }
};

export const formValidators:IFormValidators = {
    orgName: [ 
       /* isNotEmptyValidator, */
        minLengthValidator(formInfo.orgName.min), 
        maxLengthValidator(formInfo.orgName.max)  
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
    repeatPassword: [],
    general: []
};

export const formKeys: [
    'orgName', 
    'username',
    'email',
    'password',
    'repeatPassword',
    'general'
] = [ 
    'orgName', 
    'username',
    'email',
    'password',
    'repeatPassword',
    'general'
];

export const generateFormData = (form:any) => {
    return {
        orgName: form[0].value.trim(),
        username: form[2].value.trim(),
        email: form[4].value.trim(),
        password: form[6].value,
        repeatPassword: form[8].value,
        general: ''
    };
};

const clearString = (string:string) => {
    return string.replaceAll("\"", "");
};

export const createErrorsFromServer = (error:string) => {

    const errors = {
        orgName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        general: ''
    };

    if (error.includes('First Name')) {
        errors['orgName'] = clearString(error) + '.';
    } else if (error.includes('Username')) {
        errors['username'] = clearString(error);
    } else if (error.includes('E-Mail')) {
        errors['email'] = clearString(error);
    } else if (error.includes('Password')) {
        errors['password'] = clearString(error) + '.';
    } else if (error.includes('Repeat Password')) {
        errors['repeatPassword'] = "Passwords don't match.";
    } else {
        errors['general'] = clearString(error);
    }

    return errors;
};

export const validateFormData = async (formData:IFormData) => {

    const errors = {
        orgName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        general: ''
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

    if (formData.password !== formData.repeatPassword) {
        errors.repeatPassword = `Passwords don't match.`;
        state = true;
    }

    return { errors, state };
};