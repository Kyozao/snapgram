import FormInput from "@/components/FormInput";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full flex">
      <main className="flex flex-col bg-neutral-950 h-full w-full  items-center justify-center space-y-4">
        <Image src="/images/logo.svg" alt="logo" width={150} height={150} />
        <section className="text-center">
          <h1 className="text-white font-bold text-2xl">
            Create a new account
          </h1>
          <p className="text-violet-200 text-sm">
            To use Snapgram enter your details
          </p>
        </section>
        <form action="" className="flex flex-col gap-y-2">
          <FormInput inputName={"Name"} inputId={"name"} />
          <FormInput inputName={"Username"} inputId={"username"} />
          <FormInput inputName={"Email"} inputId={"email"} />
          <FormInput inputName={"Password"} inputId={"password"} />
          <button type="submit" className="btn btn-primary mt-2">Sign Up</button>
        </form>
      </main>
    </div>
  );
}
