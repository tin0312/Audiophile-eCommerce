export function authMessage(errorCode : string){
   switch(errorCode){
        case "auth/user-not-found":
            return "User does not exist. Please double check your email address!"
        case "auth/invalid-credential":
            return "Invalid credential. Please try again!"
        default:
            return "Something went wrong. Please try again later"
   } 
}