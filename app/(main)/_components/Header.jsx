"use client";
import React from "react";
import SearchBar from "./SearchBar";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const { user, isLoaded } = useUser();

  return (
    <div>
      <div>
        <SearchBar user={user} isLoaded={isLoaded} />
      </div>
    </div>
  );
};

export default Header;
