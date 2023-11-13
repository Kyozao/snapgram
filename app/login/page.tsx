import FormInput from "@/components/FormInput";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function Home() {
  return (
    <div className="h-full w-full flex">
      <main className="flex flex-col bg-neutral-950 h-full w-full  items-center justify-center space-y-4">
        <Image src="/images/logo.svg" alt="logo" width={150} height={150} />
        <section className="text-center">
          <h1 className="text-white font-bold text-2xl">Log in your account</h1>
          <p className="text-violet-200 text-sm">
            To use Snapgram please enter your details
          </p>
        </section>
        <form action="" className="flex flex-col gap-y-2">
          <FormInput
            inputName={"Username"}
            inputId={"username"}
            inputType="text"
          />
          <FormInput
            inputName={"Password"}
            inputId={"password"}
            inputType="password"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
          <p className="text-neutral-300 text-center">
            Don&apos;t have an account yet?{" "}
            <Link href={"/signup"} className="text-primary">
              Sign up
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
