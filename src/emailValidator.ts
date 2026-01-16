
export function emailChecker  (email:string) : boolean {
    if(!email.includes('@')) return false
    let validate = false;
    let index = email.indexOf('@');
    validate = checkPointConditions(index, email, validate);
    if(!validate)return false;
    validate = checkSpaceCondition(email, validate);
    if(!validate)return false;
    validate = checkTextBeforAfter(email, index, validate);

    return validate;
}
function checkTextBeforAfter(email: string, index: number, validate: boolean) {
    if (email.charAt(index - 1) === "" || email.charAt(index + 1) === "") {
        validate = false;
    }
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
