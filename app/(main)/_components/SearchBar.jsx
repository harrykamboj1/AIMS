import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-2 border p-2 mr-5 rounded-md w-full">
        <Search className="h-5 w-5" />
        <input
          className="outline-none w-full"
          type="text"
          placeholder="Search Courses..."
        />
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500 cursor-pointer" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default SearchBar;
