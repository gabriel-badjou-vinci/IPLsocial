
export function emailChecker  (email:string) : boolean {
    if(!email.includes('@')) return false
    let validate = false;
    let index = email.indexOf('@')
    for(let i = index; i < email.length; i++){
        if(email[i] === '.'){
            validate = true;
            break;
        }
    }
    return validate;
}