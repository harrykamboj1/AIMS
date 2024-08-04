"use client";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    } else {
      isLoaded && router.push("/courses")
    }
  }, [])
  redirect("/courses")
  return (
    <div>

    </div>
  );
}
