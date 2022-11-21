


const emailValidator = (email:string) => {
    const re = /\S+@\S+\.\S+/;
    return { status: re.test(email), msg: 'is invalid.' };
}

export default emailValidator;