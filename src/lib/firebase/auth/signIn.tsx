import { app } from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { authMessage } from "./authMessage";

const auth = getAuth(app)

export async function signIn(email: string, password: string){
    let result
    let errorCode
    try{
        result = signInWithEmailAndPassword(auth, email, password)
    } catch(error: any){
        errorCode = authMessage(error.code)
    }
    return { result, errorCode}
}