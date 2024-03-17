"use client";

import { useRouter } from "next/navigation";
import FormInput from "../components/ui/form/FormInput";
import ButtonPrimary from "../components/ui/button/ButtonPrimary";
import { useState } from "react";
import { signIn } from "@/lib/firebase/auth/signIn";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState<string | null>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { result, errorMessage } = await signIn(email, password);
      console.log(result);
      setError(errorMessage);
      if (!errorMessage) {
        router.push("/");
        console.log("Signed in!");
      }
    } catch (error: any) {
      setError(error);
    }
  }
  return (
    <section className="mb-60">
      <form
        onSubmit={handleSubmit}
        className="md:1/4 mx-auto mt-64 flex w-4/5 flex-col gap-4"
      >
        <h2 className="pb-10 text-center text-lg font-bold uppercase">
          Log in with Audiphile Account
        </h2>
        {error && (
          <p className="w-full rounded-lg border bg-red-300 px-4 py-3">
            {error}
          </p>
        )}
        <FormInput
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
        />
        <ButtonPrimary label={"Login"} type={"submit"} style={"uppercase"} />
        <p className="text-center">
          <span className="pr-2 opacity-50">Do not have an account?</span>
          <Link href="/signup" className="hover:text-primary-700">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
}
