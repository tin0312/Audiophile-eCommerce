import { app } from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { authMessage } from "./authMessage";

const auth = getAuth(app)

export async function signIn(email: string, password: string){
    let result
    let errorMessage
    try{
        result = signInWithEmailAndPassword(auth, email, password)
    } catch(error: any){
        errorMessage = authMessage(error.code)
    }
    return { result, errorMessage}
}