"use client";
import { useTheme } from "next-themes";
import { BadgeCheck, BookOpenIcon, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const SideNavigationBar = () => {
  const { user } = useUser();
  const menuData = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 2,
      name: "All Courses",
      icon: BookOpenIcon,
      path: "/courses",
      auth: true,
    },
    // {
    //   id: 3,
    //   name: "Membership",
    //   icon: BadgeCheck,
    //   path: "/membership",
    // },
  ];
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white p-5 shadow-sm border h-screen cursor-pointer">
      {theme === "dark" && (
        <Image src={"/AIMS.png"} height={80} width={170} alt="logo" />
      )}
      {theme === "light" && (
        <Image src={"/AIMS_LIGHT.png"} height={80} width={170} alt="logo" />
      )}
      {theme === "system" && (
        <Image src={"/AIMS.png"} height={80} width={170} alt="logo" />
      )}

      <div className="mt-7">
        {menuData.map((item, index) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`group flex gap-3 mt-1 p-3 text-[16px] items-center text-gray-900 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ${
                path.includes(item.path) && "bg-primary text-white"
              }`}
              key={item.id}
            >
              <item.icon className="group-hover:animate-bounce" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavigationBar;
