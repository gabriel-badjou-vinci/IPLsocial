
export function emailChecker  (email:string) : boolean {
    if(!email.includes('@')) return false
    let validate = false;
    let index = email.indexOf('@');
    validate = checkPointConditions(index, email, validate);
    validate = checkSpaceCondition(email, validate);
    return validate;
}

function checkSpaceCondition(email: string, validate: boolean) : boolean{
    if (email.includes(' ')) {
        validate = false;
    }
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
