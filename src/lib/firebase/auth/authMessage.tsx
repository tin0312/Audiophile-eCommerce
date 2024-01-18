export function authMessage(errorCode : string){
   switch(errorCode){
        case "auth/user-not-found":
            return "User does not exist. Please double check your email address!"
        case "auth/wrong-password":
            return "Password not matching. Please try again"
        default:
            return "Something went wrong. Please try again later"
   } 
}