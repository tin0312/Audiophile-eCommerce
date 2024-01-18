import { app } from "@/lib/firebase/firebaseConfig"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { authMessage } from "./authMessage"

const auth = getAuth(app)

export async function signUp(email: string, password: string){
    let result
    let errorMessage
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
    } catch(error: any){
        errorMessage = authMessage(error.code)
    }
    return { result, errorMessage }
}