import { validatorFunction } from '../Interfaces';

const runValidator = async (value:string, validators: validatorFunction[]) => {

    let returnObj = { status: true, msg: '' };
     
    for await (let validator of validators) {
        const { status, msg } = validator(value);
        if (!status) { 
            returnObj = { status, msg };
            break;
        }
    }

    return returnObj;
}

export default runValidator;