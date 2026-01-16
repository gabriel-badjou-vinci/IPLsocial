
export function emailChecker  (email:string) : boolean {
    if(!email.includes('@')) return false
    let validate = false;
    let index = email.indexOf('@');
    for(let i = index; i < email.length; i++){
        if(email[i] === '.' && email[i+1] !== undefined){
            validate = true;
            break;
        }
    }
    return validate;
}