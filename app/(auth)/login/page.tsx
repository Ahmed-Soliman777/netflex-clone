import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

async function Login() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form className="">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            className="w-full bg-[#e50914]"
            variant={"destructive"}
          >
            Login
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        New to Netflix? {""}
        <Link className="text-white hover:underline ml-2" href="/sign-up">
          Sign up
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSigninButton />
        <GoogleSigninButton />
      </div>
    </div>
  );
}

export default Login;
