

export interface InfoValues {
    max: number;
    min: number;
    label: string;
}

export type validatorFunction = (val:string) => { status: boolean, msg: string; };


export default {};