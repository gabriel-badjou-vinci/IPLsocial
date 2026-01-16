
export function emailChecker  (email:string) : boolean {
    if(!email.includes('@')) return false
    let validate = false;
    let index = email.indexOf('@');
    validate = checkPointConditions(index, email, validate);
    return validate;
}

function checkPointConditions(index: number, email: string, validate: boolean) : boolean{
    for (let i = index; i < email.length; i++) {
        if (email[i] === '.' && email[i + 1] !== undefined) {
            validate = true;
            break;
        }
    }
    return validate;
}
