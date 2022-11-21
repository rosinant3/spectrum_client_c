

const passwordValidator = (value: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/;
    return { status: re.test(value), msg: 'must contain uppercase, lowercase, special characters and numbers.' }
};

export default passwordValidator;