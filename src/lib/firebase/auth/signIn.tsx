import { app } from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { authMessage } from "./authMessage";

const auth = getAuth(app)

export async function signIn(email: string, password: string){
    let result = null
    let errorMessage = null
    try{
        result = await signInWithEmailAndPassword(auth, email, password)
    } catch(error: any){
        errorMessage = authMessage(error.code)
    }
    return { result, errorMessage}
}