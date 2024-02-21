'use client'

import { useRouter } from "next/navigation";
import FormInput from "../components/ui/form/FormInput";
import ButtonPrimary from "../components/ui/button/ButtonPrimary";
import { useState } from "react"
import { signIn } from "@/lib/firebase/auth/signIn"
import Link from "next/link";

export default function SignIn() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState<string | null>()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const { result, errorMessage } = await signIn(email, password)
            console.log(result)
            setError(errorMessage)
            if (!errorMessage) {
                router.push("/")
                console.log("Signed in!")
            } 
           
        } catch (error: any) {
            setError(error)
        }
    }
        return (
            <section className= "mb-60">
                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-1/4 mt-64 mx-auto"
                    >
                    <h2 className="text-center pb-10 uppercase text-lg font-bold">Log in with Audiphile Account</h2>
                    {error && <p className="w-full py-3 px-4 border bg-red-300 rounded-lg">{error}</p>}
                    <FormInput
                        label="Email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <FormInput
                        label="Password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)} />
                    <ButtonPrimary
                        label={"Login"}
                        type={"submit"}
                        style={"uppercase"}
                    />
                    <p className="text-center">
                        <span className="opacity-50 pr-2">Do not have an account?</span>
                        <Link href="/signup" className="hover:text-primary-700">Sign up</Link>
                    </p>
                </form>
            </section>

        )
    }