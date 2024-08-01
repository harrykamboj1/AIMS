import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center bg-primary justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-white">Welcome Back</h1>
        </div>
        <p className="text-base text-white">
          Log in or Create account to get back to your course
        </p>
        <div className="mt-8 flex justify-center items-center">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden bg-white lg:flex items-center justify-center">
        <Image src={"/AIMS_LIGHT.png"} alt="Logo" height={290} width={290} />
      </div>
    </div>
  );
}
