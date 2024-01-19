'use client'

import { useRouter } from "next/navigation";
import FormInput from "../components/ui/form/FormInput";
import ButtonPrimary from "../components/ui/button/ButtonPrimary";
import { useState } from "react"
import { signUp } from "@/lib/firebase/auth/signUp"
import Link from "next/link";

export default function SignIn() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState<string | null>()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const { result, errorMessage } = await signUp(email, password)
            console.log(result)
           setError(errorMessage)
            if (!errorMessage) {
                router.push("/")
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
                    <h2 className="text-center pb-10 uppercase text-lg font-bold">Sign up with Audiphile Account</h2>
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
                        label={"Sign up"}
                        type={"submit"}
                        style={"uppercase"}
                    />
                    <p className="text-center">
                        <span className="opacity-50 pr-2">Already have an account?</span>
                        <Link href="/signin" className="hover:text-primary-700">Sign in</Link>
                    </p>
                </form>
            </section>
        )}