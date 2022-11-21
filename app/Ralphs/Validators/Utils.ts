


export const isPlural = (number: number) => {
    if (number > 1) {
        return 's';
    }
    return '';
};