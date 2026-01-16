
export function emailChecker  (email:string) : boolean {
    if(!email.includes('@')) return false
    return true;
}