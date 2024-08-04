import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const SearchBar = ({ user, isLoaded }) => {
  return (
    <div className="p-4 bg-white flex justify-end">
      {/* <div className="flex gap-2 border p-2 mr-5 rounded-md ">
        {/* <Search className="h-5 w-5" />
        <input
          className="outline-none w-full"
          type="text"
          placeholder="Search Courses..."
        /> */}
      {/* </div> */}
      <div className="flex items-center gap-4">
        {/* <BellDot className="text-gray-500 cursor-pointer" /> */}
        {isLoaded && user ? (
          <div>
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton />
            </SignedIn>
          </div>
        ) : (
          <Link href={"/sign-in"}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
