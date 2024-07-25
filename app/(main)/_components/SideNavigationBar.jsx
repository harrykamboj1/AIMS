"use client";
import { useTheme } from "next-themes";
import { BadgeCheck, BadgeIcon, BookIcon, BookOpenIcon } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const menuData = [
  {
    id: 1,
    name: "All Courses",
    icon: BookOpenIcon,
  },
  {
    id: 2,
    name: "Membership",
    icon: BadgeCheck,
  },
];

const SideNavigationBar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white p-5 shadow-sm border h-screen">
      {theme === "dark" && (
        <Image src={"/AIMS.png"} height={50} width={50} alt="logo" shadow-md />
      )}
      {theme === "light" && (
        <Image
          src={"/AIMS_LIGHT.png"}
          height={80}
          width={170}
          alt="logo"
          shadow-md
        />
      )}
      {theme === "system" && (
        <Image src={"/AIMS.png"} height={50} width={50} alt="logo" shadow-md />
      )}

      <div className="mt-7">
        {menuData.map((item, index) => (
          <div
            className="group flex gap-3 mt-1 p-3 text-[16px] items-center text-gray-900 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all"
            key={index}
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavigationBar;
