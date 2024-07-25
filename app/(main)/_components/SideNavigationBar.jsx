import { BadgeIcon, BookIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const menuData = [
  {
    id: 1,
    name: "All Courses",
    icon: BookIcon,
  },
  {
    id: 2,
    name: "Membership",
    icon: BadgeIcon,
  },
];

const SideNavigationBar = () => {
  return (
    <div className="">
      <Image src={"/AIMS.png"} height={50} width={50} />
    </div>
  );
};

export default SideNavigationBar;
