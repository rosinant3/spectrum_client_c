import { isPlural } from '../Utils';


const maxLengthValidator = (max:number) => {
    const validateMaxLength = (value:string) => {
        return { status: value.length <= max, msg: `character limit is ${max}.`}
    };
    return validateMaxLength;
};



export default maxLengthValidator;